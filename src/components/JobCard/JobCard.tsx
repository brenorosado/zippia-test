import * as S from "./styles";
import { AiFillStar } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

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
        location,
        OBJurl
    } = jobData;

    const offersBenefits = benefits.length > 0;
    const description = jobDescription
        .replaceAll("<br>", "")
        .replaceAll("<br/>", "")
        .replaceAll("<b>", "")
        .replaceAll("</b>", "")
        .replaceAll("<p>", "")
        .replaceAll("</p>", "")
        .replaceAll("<ul>", "")
        .replaceAll("</ul>", "")
        .replaceAll("<li>", "")
        .replaceAll("</li>", "")
        .replaceAll("<br />", "");

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
                {companyZippiaOverallScore && (
                    <span>
                        {companyZippiaOverallScore.toFixed(1)} <strong><AiFillStar/></strong>
                    </span>
                )}
            </S.CompanyInfoContainer>
            <S.JobDetailsContainer>
                <S.JobSummaryContainer>
                    <h4>{jobTitle}</h4>
                    <span>{companyName}</span>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <p>{`${OBJtitleDisplay}, ${location}`}</p>
                        </div>
                        {OBJurl && (
                            <div>
                                <a 
                                    href={OBJurl}
                                    target="_blank"
                                >
                                    Opens new tab <strong><BiLinkExternal /></strong>
                                </a>
                            </div>
                        )}
                    </div>
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