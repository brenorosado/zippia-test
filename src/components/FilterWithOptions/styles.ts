import styled from "styled-components";

interface FilterProps {
    showOptions: boolean;
    selected: boolean;
}

export const FilterLabel = styled.div<FilterProps>`
    border: clamp(1px, 0.05vw, 0.05vw) solid #e1e1e1;
    padding: clamp(8px, 0.4166vw, 0.4166vw);
    font-size: clamp(16px, 0.833vw, 0.833vw);
    color: ${({ selected, theme }) => 
        selected ? "white" : theme.colors.primary
    };
    font-weight: 500;
    cursor: pointer;
    border-radius: clamp(5px, 0.26vw, 0.26vw);
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
        width: clamp(15px, 0.78125vw, 0.78125vw);
        height: clamp(15px, 0.78125vw, 0.78125vw);
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
    padding: clamp(20px, 1.04vw, 1.04vw);
    width: clamp(360px, 20vw, 20vw);
    border: clamp(1px, 0.05vw, 0.05vw) solid #e1e1e1;
    box-shadow: 0 0 clamp(20px, 1.04vw, 1.04vw) #e1e1e1;
    border-radius: clamp(10px, 0.52vw, 0.52vw);
    display: flex;
    flex-direction: column;
    gap: clamp(25px, 1.3vw, 1.3vw);
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
        font-weight: 500;
        font-size: clamp(18px, 0.9375vw, 0.9375vw);
    }

    span {
        font-weight: bold;
        cursor: pointer;
        padding: clamp(5px, 0.26vw, 0.26vw);
    }
`;

export const OptionsContainer = styled.div`
    display: flex;
    gap: clamp(10px, 0.52vw, 0.52vw);
    flex-wrap: wrap;
`;

interface OptionProps {
    selected: boolean;
}

export const OptionTag = styled.span<OptionProps>`
    background: ${({ selected, theme }) => selected ? theme.colors.primary : "#e1e1e1"};
    ${({ selected }) => selected && "color: white;"}

    transition: all 0.2s;
    padding: clamp(5px, 0.26vw, 0.26vw) clamp(10px, 0.52vw, 0.52vw);
    border-radius: clamp(15px, 0.78125vw, 0.78125vw);
    font-weight: 500;
    cursor: pointer;

    small {
        font-weight: 500;
        font-size: clamp(16px, 0.83vw, 0.83vw);
    }
`;

export const ActionsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    button {
        cursor: pointer;
        border: none;
        font-size: clamp(16px, 0.83vw, 0.83vw);
        font-weight: bold;
        background: white;
        padding: clamp(5px, 0.26vw, 0.26vw);

        :first-child {
            color: grey;
        }

        :last-child {
            color: ${({ theme }) => theme.colors.primary};
        }
    }
`;