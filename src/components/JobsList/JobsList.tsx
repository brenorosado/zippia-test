import { JobCard } from "../JobCard/JobCard";
import * as S from "./styles";

export const JobsList = ({ jobs, setSelectedJob, selectedJob }) => {
    return (
        <S.JobsListContainer>
            {jobs.map(job => (
                <JobCard
                    onSelect={() => setSelectedJob(job)}
                    key={job.jobId}
                    selected={selectedJob.jobId === job.jobId}
                    jobData={job}
                />
            ))}
        </S.JobsListContainer>
    )
};