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
    
    const fetchJobs = async (reqFilters) => {
        try {
            const res = await jobsService.getJobs(reqFilters);
            const newJobs = res.data;
            console.log("newJobs", newJobs);
            setJobs(newJobs);
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

    return (
        <>
            <Head>
                <title>Zippia Jobs</title>
                <meta name="Zippia Jobs" content="Zippia Jobs" />
                <link rel="icon" href="/zippia-logo.svg" />
            </Head>
            
            <S.JobsPageContainer>
                <JobFilters 
                    filters={filters}
                    updateFilters={updateFilters}
                />
                <JobsList
                    jobs={jobs.jobs}
                    setSelectedJob={setSelectedJob}
                    selectedJob={selectedJob}
                    />
            </S.JobsPageContainer>
        </>
    )
};