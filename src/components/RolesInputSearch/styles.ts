import styled from "styled-components";

export const SearchContainer = styled.div`
    position: relative;
`;

export const InputContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    border: 1px solid #e1e1e1;
    padding: clamp(8px, 0.4166vw, 0.4166vw);
    border-radius: clamp(5px, 0.26vw, 0.26vw);
    color: grey;
    font-size: clamp(16px, 0.833vw, 0.833vw);
    
    input {
        font-size: clamp(16px, 0.833vw, 0.833vw);
        border: none;
        outline: none;
        color: grey;
        height: 100%;
    }
`;

export const RoleOptionsContainer = styled.div`
    position: absolute;
    background: white;
    top: clamp(40px, 2.083vw, 2.083vw);
    border: clamp(1px, 0.05vw, 0.05vw) solid #e1e1e1;
    border-radius: clamp(5px, 0.26vw, 0.26vw);
    box-shadow: 0 0 clamp(20px, 1.042vw, 1.042vw) #e1e1e1;
    
    div {
        font-size: clamp(16px, 0.833vw, 0.833vw);
        :first-child {
            border-top-left-radius: clamp(5px, 0.26vw, 0.26vw);;
            border-top-right-radius: clamp(5px, 0.26vw, 0.26vw);;
        }
        
        :last-child {
            border-bottom-left-radius: clamp(5px, 0.26vw, 0.26vw);;
            border-bottom-right-radius: clamp(5px, 0.26vw, 0.26vw);;
        }

        cursor: pointer;
        padding: clamp(5px, 0.26vw, 0.26vw);;
        background: white;
        transition: all 0.2s;
        :hover {
            background: #e1e1e1;
        }
    }
`;