import { JobsPage } from "../../../src/views/JobsPage/JobsPage";
import jobsService from "../../../src/services/jobs/jobsService";
import { JobsRequestPayload } from "../../../src/entities/JobsRequestPayload";

export default JobsPage;

export const getServerSideProps = async () => {
    const initialPayload: JobsRequestPayload = {
        companySkills: true,
        dismissedListingHashes: [],
        fetchJobDesc: true,
        jobTitle: "Business Analyst",
        locations: [],
        numJobs: 10,
        previousListingHashes: []
    }

    const res = await jobsService.getJobs(initialPayload);
    const jobs = res.data;

    return {
        props: {
            jobs
        }
    }
}