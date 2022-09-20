import styled from "styled-components";

interface FilterProps {
    showOptions: boolean;
    selected: boolean;
}

export const FilterLabel = styled.div<FilterProps>`
    border: 1px solid #e1e1e1;
    padding: 8px;
    color: ${({ selected, theme }) => 
        selected ? "white" : theme.colors.primary
    };
    font-weight: 500;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ selected, theme }) => 
        selected ? theme.colors.primary : "white"
    };
    
    transition: all 0.2s;
    
    :hover {
        ${({ selected }) => !selected && "background: #e1e1e1;"}
    }
    
    strong {
        margin-left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15px;
        height: 15px;
        transition: all 0.2s;
        transform: rotate(0deg);
        ${({ showOptions }) => showOptions && "transform: rotate(180deg);"}
    }
`;

export const OptionsOverlay = styled.div`
    z-index: 2;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const OptionsModal = styled.div`
    background: white;
    padding: 20px;
    width: clamp(360px, 20vw, 20vw);
    border: 1px solid #e1e1e1;
    box-shadow: 0 0 20px #e1e1e1;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
        font-weight: 500px;
        font-size: 18px;
    }

    span {
        font-weight: bold;
        cursor: pointer;
        padding: 5px;
    }
`;

export const OptionsContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`;

interface OptionProps {
    selected: boolean;
}

export const OptionTag = styled.span<OptionProps>`
    background: ${({ selected, theme }) => selected ? theme.colors.primary : "#e1e1e1"};
    ${({ selected }) => selected && "color: white;"}

    transition: all 0.2s;
    padding: 5px 10px;
    border-radius: 15px;
    font-weight: 500;
    cursor: pointer;

    small {
        font-weight: 500;
        font-size: 16px;
    }
`;

export const ActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        cursor: pointer;
        border: none;
        font-size: 16px;
        font-weight: bold;
        background: white;
        padding: 5px;

        :first-child {
            color: grey;
        }

        :last-child {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;