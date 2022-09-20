import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import * as S from "./styles";

export const FilterWithOptions = ({
    label,
    filter,
    options,
    filters,
    updateFilters,
    multipleOptions }) => {
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [filterValue, setFilterValue] = useState<any>(multipleOptions ? [] : "");

    const updateFilterValue = (value) => {
        if (!multipleOptions) return setFilterValue(value);
        
        setFilterValue(prevState => [...prevState, value]);
    }

    const checkFilterSelected = (value) => {
        if(!multipleOptions) return filterValue === value;

        return filterValue?.includes(value);
    }

    const clearFilterValue = () => {
        setFilterValue(multipleOptions ? [] : "");
        updateFilters(filter, null);
    }

    const deleteFilterValue = (value) => {
        if(!multipleOptions) return setFilterValue(null);

        const newFilterValue = filterValue.map(i => i);
        const indexToDelete = newFilterValue.findIndex(j => j === value);

        newFilterValue.splice(indexToDelete, 1);

        setFilterValue(newFilterValue);
    }

    return (
        <>
            <S.FilterLabel
                selected={filters[filter] && filterValue?.length > 0}
                showOptions={showOptions}
                onClick={() => setShowOptions(prevState => !prevState)}
            >
                <span>{label}</span>
                <strong><MdOutlineKeyboardArrowDown/></strong>
            </S.FilterLabel>

            {showOptions && (
                <S.OptionsOverlay>
                    <S.OptionsModal>
                        <S.TitleContainer>
                            <h4>{label}</h4>
                            <span onClick={() => setShowOptions(false)}>X</span>
                        </S.TitleContainer>
                        <S.OptionsContainer>
                                {options.map(option => {
                                    const isSelected = checkFilterSelected(option.value);
                                    return (
                                        <S.OptionTag
                                            selected={isSelected}
                                            onClick={() => {
                                                if(isSelected)
                                                    return deleteFilterValue(option.value);
                                                    
                                                    updateFilterValue(option.value);
                                            }}
                                        >
                                            {option.label}
                                            {isSelected && <small> X</small>}
                                        </S.OptionTag>
                                    )}
                                )}
                        </S.OptionsContainer>
                        <S.ActionsContainer>
                            <button onClick={() => {
                                clearFilterValue();
                                setShowOptions(false);
                            }}>
                                Clear
                            </button>
                            <button onClick={() => {
                                updateFilters(filter, filterValue);
                                setShowOptions(false);
                            }}>
                                Apply
                            </button>
                        </S.ActionsContainer>
                    </S.OptionsModal>
                </S.OptionsOverlay>
            )}
        </>
    )
};