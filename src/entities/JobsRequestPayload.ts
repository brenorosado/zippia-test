interface Locations {
    city: string;
    state: string;
}

export interface JobsRequestPayload {
    companySkills: boolean;
    dismissedListingHashes: string[];
    fetchJobDesc: boolean;
    jobTitle: string;
    locations: Locations[];
    numJobs: number;
    previousListingHashes: [];
}