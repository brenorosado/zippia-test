import * as S from "./styles";
import Head from "next/head";
import { JobsList } from "../../components/JobsList/JobsList";
import { useReducer, useState } from "react";
import { JobsRequestPayload } from "../../entities/JobsRequestPayload";
import { JobFilters } from "../../components/JobFilters/JobFilters";
import jobsService from "../../services/jobs/jobsService";

const initialPayload: JobsRequestPayload = {
    companySkills: true,
    dismissedListingHashes: [],
    fetchJobDesc: true,
    jobTitle: "",
    jobType: [],
    postingDateRange: "",
    locations: [],
    numJobs: 10,
    previousListingHashes: []
}

const reducer = (state, record) => ({ ...state, ...record });

export const JobsPage = ({ initialJobs }) => {
    const [jobs, setJobs] = useState(initialJobs);
    const [selectedJob, setSelectedJob] = useState(initialJobs.jobs[0]);
    const [filters, dispatch] = useReducer(reducer, initialPayload);
    const [sorting, setSorting] = useState<boolean>(true);
    
    const fetchJobs = async (reqFilters) => {
        try {
            const res = await jobsService.getJobs(reqFilters);
            const newJobs = res.data;
            setJobs(newJobs);
            setSelectedJob(newJobs.jobs[sorting ? 0 : 9]);
        } catch (e) {
            console.log(e);
        }
    }

    const updateFilters = (filter, value) => {
        const newFilters = {...filters};
        newFilters[filter] = value;
        dispatch(newFilters);
        fetchJobs(newFilters);
    };

    const jobsArray = jobs.jobs.map(i => i);
    const jobsSortedByDescCompanyNames = jobsArray.reverse();

    return (
        <>
            <Head>
                <title>Zippia Jobs</title>
                <meta name="Zippia Jobs" content="Zippia Jobs" />
                <link rel="icon" href="/zippia-logo.svg" />
            </Head>
            <S.JobsPageContainer>
                <JobFilters
                    sorting={sorting}
                    setSorting={setSorting}
                    filters={filters}
                    updateFilters={updateFilters}
                />
                <JobsList
                    jobs={sorting ? jobs.jobs : jobsSortedByDescCompanyNames}
                    setSelectedJob={setSelectedJob}
                    selectedJob={selectedJob}
                    />
            </S.JobsPageContainer>
        </>
    )
};