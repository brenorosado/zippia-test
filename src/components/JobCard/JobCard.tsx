import * as S from "./styles";
import { AiFillStar } from "react-icons/ai";

export const JobCard = ({ jobData, selected, onSelect }) => {
    const { 
        jobTitle,
        jobDescription, 
        jobLevels,
        preferredDegrees,
        estimatedSalary,
        companyName,
        companyLogo,
        companyInitial,
        companyZippiaOverallScore,
        postedDate,
        benefits,
        OBJtitleDisplay,
        location
    } = jobData;

    const offersBenefits = benefits.length > 0;
    const description = jobDescription
        .replaceAll("<br>", "")
        .replaceAll("<br/>", "")
        .replaceAll("<b>", "")
        .replaceAll("</b>", "")
        .replaceAll("<p>", "")
        .replaceAll("</p>", "")

    return (
        <S.JobCardContainer onClick={() => onSelect()} selected={selected}>
            <S.CompanyInfoContainer>
                <S.CompanyLogoContainer>
                    {companyLogo ? (
                        <img src={companyLogo} />
                    ) : (
                        <div>
                            {companyInitial}
                        </div>
                    )}
                </S.CompanyLogoContainer>
                <span>{companyZippiaOverallScore.toFixed(1)} <strong><AiFillStar/></strong></span>
            </S.CompanyInfoContainer>
            <S.JobDetailsContainer>
                <S.JobSummaryContainer>
                    <h4>{jobTitle}</h4>
                    <span>{companyName}</span>
                    <p>{`${OBJtitleDisplay}, ${location}`}</p>
                </S.JobSummaryContainer>
                <S.JobDescription>
                    <p>{description}</p>
                </S.JobDescription>
                <S.JobImportantInfoTagsContainer>
                    {jobLevels.map((jobLevel, index) => <S.JobImportantInfoTags key={index}>{jobLevel}</S.JobImportantInfoTags>)}
                    {preferredDegrees.map((preferredDegree, index) => <S.JobImportantInfoTags key={index}>{preferredDegree}</S.JobImportantInfoTags>)}
                    {offersBenefits && <S.JobImportantInfoTags>Offers Benefits</S.JobImportantInfoTags>}
                </S.JobImportantInfoTagsContainer>
                <S.JobFooterInfo>
                    <span>{estimatedSalary}</span>
                    <span><strong>New </strong>{postedDate}</span>
                </S.JobFooterInfo>
            </S.JobDetailsContainer>
        </S.JobCardContainer>
    )
};