import * as S from "./styles";
import Head from "next/head";
import { JobsList } from "../../components/JobsList/JobsList";
import { useState } from "react";

export const JobsPage = ({ jobs }) => {
    const [selectedJob, setSelectedJob] = useState(jobs.jobs[0]);

    return (
        <>
            <Head>
                <title>Zippia Jobs</title>
                <meta name="Zippia Jobs" content="Zippia Jobs" />
                <link rel="icon" href="/zippia-logo.svg" />
            </Head>
            <S.JobsPageContainer>
                <JobsList
                    jobs={jobs.jobs}
                    setSelectedJob={setSelectedJob}
                    selectedJob={selectedJob}
                    />
            </S.JobsPageContainer>
        </>
    )
};