import { useEffect, useState } from "react";
import jobsService from "../../services/jobs/jobsService";
import * as S from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

export const RolesInputSearch = ({ updateFilters }) => {
    const [search, setSearch] = useState<string>("");
    const [showOptions, setShowOptions] = useState<boolean>(false);
    const [rolesOptions, setRolesOptions] = useState([]);

    const getRolesOptions = async () => {
        const res = await jobsService.getRoles(search);
        const options = res?.data || [];

        setRolesOptions(options);
    };

    useEffect(() => { getRolesOptions() }, [search]);

    const selectRole = (roleName) => {
        updateFilters("jobTitle", roleName);
        setSearch(roleName);
        setShowOptions(false);
    };

    return (
        <S.SearchContainer>
            <S.InputContainer onClick={() => setShowOptions(true)}>
                <input
                    placeholder="Job Title"
                    value={search}
                    onChange={(e) => {
                        if (e.target.value === "") updateFilters("jobTitle", null);;
                        setSearch(e.target.value);
                    }}
                />
                <span><AiOutlineSearch /></span>
            </S.InputContainer>
            {showOptions && (
                <S.RoleOptionsContainer>
                    {rolesOptions?.map(roleOption => (
                        <div
                            key={roleOption.id}
                            onClick={() => selectRole(roleOption.name)}
                        >
                            {roleOption.name}
                        </div>
                    ))}
                </S.RoleOptionsContainer>
            )}
        </S.SearchContainer>
    )
};