import axios from "axios";
import { JobsRequestPayload } from "../../entities/JobsRequestPayload";

export default {
    getJobs: (payload: JobsRequestPayload) => axios.post("https://www.zippia.com/api/jobs/", payload),

    getRoles: (search: string) => axios.get(`https://www.zippia.com/autocomplete/source/?searchString=${search}`)
}