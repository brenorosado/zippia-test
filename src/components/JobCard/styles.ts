import styled from "styled-components";

interface JobCardProps {
    selected: boolean;
}

export const JobCardContainer = styled.article<JobCardProps>`
    border: 1px solid #e1e1e1;
    display: flex;
    gap: clamp(5px, 0.26vw, 0.26vw);
    padding: clamp(5px, 0.26vw, 0.26vw);
    width: clamp(350px, 20vw, 20vw);
    height: clamp(300px, 15vw, 15vw);
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
        gap: 3px;
        font-size: 13px;
    
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
        border-radius: 5px;
        font-weight: bold;
        font-size: 24px;
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
        margin-bottom: clamp(5px, 0.26vw, 0,26vw);
    }

    span {
        font-size: clamp(14px, 0.73vw, 0.73vw);
        font-weight: 500;
        color: #5b5b5b;
    }

    p {
        font-size: clamp(14px, 0.73vw,  0.73vw);
    }
`;

export const JobDescription = styled.div`
    width: 100%;
    height: 28%;
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