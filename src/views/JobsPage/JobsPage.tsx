import * as S from "./styles";

import { JobsList } from "../../components/JobsList/JobsList";
import { useState } from "react";

export const JobsPage = ({ jobs }) => {
    const [selectedJob, setSelectedJob] = useState(jobs.jobs[0]);
    
    return (
        <S.JobsPageContainer>
            <JobsList
                jobs={jobs.jobs}
                setSelectedJob={setSelectedJob}
                selectedJob={selectedJob}
            />
        </S.JobsPageContainer>
    )
};