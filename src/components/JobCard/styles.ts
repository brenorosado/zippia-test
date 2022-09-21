import styled from "styled-components";

interface JobCardProps {
    selected: boolean;
}

export const JobCardContainer = styled.article<JobCardProps>`
    border: 1px solid #e1e1e1;
    display: flex;
    gap: clamp(5px, 0.26vw, 0.26vw);
    padding: clamp(5px, 0.26vw, 0.26vw);
    width: clamp(360px, 25vw, 25vw);
    height: clamp(280px, 15vw, 15vw);
    overflow: hidden;
    border-radius: clamp(5px, 0.26vw, 0.26vw);
    cursor: pointer;
    border-left: ${
        ({ selected, theme }) => selected ? 
            `clamp(3px, 0.15625vw, 0.15625vw) solid ${theme.colors.primary}` : "1px solid #e1e1e1"
    };
`;

export const CompanyInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: clamp(5px, 0.26vw, 0.26vw);

    span {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: clamp(3px, 0.15625vw, 0.15625vw);
        font-size: clamp(13px, 0.677vw, 0.677vw);
    
        strong {
            padding-top: 4px;
            color: ${({ theme }) => theme.colors.secondary};
        }
    }
`;

export const CompanyLogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: clamp(50px, 2.6vw, 2.6vw);
    max-width: clamp(50px, 2.6vw, 2.6vw);

    div {
        width: clamp(50px, 2.6vw, 2.6vw);
        height: clamp(50px, 2.6vw, 2.6vw);
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${({ theme }) => theme.colors.secondary};
        color: white;
        border-radius: clamp(5px, 0.26vw, 0.26vw);
        font-weight: bold;
        font-size: clamp(24px, 1.26vw, 1.26vw);
    }

    img {
        width: clamp(50px, 2.6vw, 2.6vw);
    }
`;

export const JobDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: clamp(5px, 0.26vw, 0.26vw);
`;

export const JobSummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;

    h4 {
        font-size: clamp(18px, 0.94vw, 0.94vw);
        font-weight: 500;
        margin-bottom: clamp(10px, 0.52vw, 0.52vw);
    }

    span {
        font-size: clamp(14px, 0.73vw, 0.73vw);
        font-weight: 500;
        color: #5b5b5b;
    }

    p {
        font-size: clamp(14px, 0.73vw,  0.73vw);
    }

    a {
        background: #f7f8f9;
        white-space: nowrap;
        font-size: clamp(14px, 0.73vw, 0.73vw);
        padding: clamp(5px, 0.26vw, 0.26vw) clamp(10px, 0.52vw, 0.52vw);
        border-radius: clamp(5px, 0.26vw, 0.26vw);
        transition: background 0.1s;

        :hover {
            background: #e1e1e1;
        }
    
        strong {
            padding-top: 5px;
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;

export const JobDescription = styled.div`
    width: 100%;
    height: 22%;
    overflow: hidden;
    
    p {
        font-size: clamp(14px, 0.73vw,  0.73vw);
    }
`;

export const JobImportantInfoTagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: clamp(5px, 0.26vw, 0.26vw);
`;

export const JobImportantInfoTags = styled.span`
    font-size: clamp(14px, 0.73vw,  0.73vw);
    padding: clamp(5px, 0.26vw, 0.26vw); clamp(10px, 0.52vw, 0.52vw);
    background: #f7f8f9;
    border-radius: clamp(5px, 0.26vw, 0.26vw);
`;

export const JobFooterInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-size: clamp(12px, 0.625vw,  0.625vw);

        strong {
            color: ${({ theme }) => theme.colors.secondary};
        }
    }
`;