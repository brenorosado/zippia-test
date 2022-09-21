import { FilterWithOptions } from "../FilterWithOptions/FilterWithOptions";
import * as S from "./styles";
import { AiOutlineSortAscending } from "react-icons/ai";
import { RolesInputSearch } from "../RolesInputSearch/RolesInputSearch";

const postingDateRangeOptions = [
    { label: "Past Day", value: "1d" },
    { label: "Past 3 Days", value: "3d" },
    { label: "Past Week", value: "7d" },
    { label: "Past Month", value: "30d" }
];

const jobTypeOptions = [
    { label: "Full Time", value: "Full Time"},
    { label: "Part Time", value: "Part Time"},
    { label: "Internship", value: "Internship"},
    { label: "Temporary", value: "Temporary"}
];

const educationOptions = [
    { label: "None", value: "None" },
    { label: "High School", value: "High School Diploma" },
    { label: "Associate", value: "Associate" },
    { label: "Bachelor's", value: "Bachelors" },
    { label: "Master's", value: "Masters" },
    { label: "Doctorate", value: "Doctorate" }
];

const jobLevelsOptions = [
    { label: "Entry Level", value: "Entry Level" },
    { label: "Junior Level", value: "Junior Level" },
    { label: "Mid Level", value: "Mid Level" },
    { label: "Senior Level", value: "Senior Level" },
    { label: "Management", value: "Management" },
    { label: "Executive", value: "Executive" },
];

const distanceOptions = [
    { label: "0 Miles", value: "0m" },
    { label: "10 Miles", value: "10m" },
    { label: "25 Miles", value: "25m" },
    { label: "50 Miles", value: "50m" },
    { label: "75 Miles", value: "75m" }
];

export const JobFilters = ({ updateFilters, filters, sorting, setSorting }) => {
    return (
        <S.FiltersContainer sorting={sorting}>
            <RolesInputSearch
                updateFilters={updateFilters}
            />
            <button onClick={(e) => {
                    e.preventDefault();
                    setSorting(prevState => !prevState);
                }}>
                <strong><AiOutlineSortAscending/></strong> Ordenate By Company Name
            </button>
            <FilterWithOptions
                label="Distance"
                filter="radiusCategory"
                multipleOptions={false}
                options={distanceOptions}
                filters={filters}
                updateFilters={updateFilters}
            />
            <FilterWithOptions
                label="Job Type"
                filter="jobType"
                multipleOptions={true}
                options={jobTypeOptions}
                filters={filters}
                updateFilters={updateFilters}
            />
            <FilterWithOptions
                label="Job Level"
                filter="jobLevels"
                multipleOptions={true}
                options={jobLevelsOptions}
                filters={filters}
                updateFilters={updateFilters}
            />
            <FilterWithOptions
                label="Education"
                filter="degrees"
                multipleOptions={true}
                options={educationOptions}
                filters={filters}
                updateFilters={updateFilters}
            />
            <FilterWithOptions
                label="Date Posted"
                filter="postingDateRange"
                multipleOptions={false}
                options={postingDateRangeOptions}
                filters={filters}
                updateFilters={updateFilters}
            />
        </S.FiltersContainer>
    )
};