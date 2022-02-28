import * as React from "react";
import { Player } from "../../../types/DataTypes";
import { useNavigate } from "react-router-dom";
import { ThemeIcon } from "@mantine/core";
import { IoMdMale, IoMdFemale } from "react-icons/io";

interface SearchResultSuggestionProps {
  player: Player;
}

const SearchResultSuggestion: React.FC<SearchResultSuggestionProps> = ({
  player,
}) => {
  const navigate = useNavigate();

  return (
    <tr
      key={player.id}
      onClick={(e) => {
        e.preventDefault();
        navigate("/dashboard/" + player.id, { replace: false });
      }}
    >
      <td>
        {player.event === "WS" ? (
          <ThemeIcon color="pink" size={24}>
            <IoMdFemale />
          </ThemeIcon>
        ) : (
          <ThemeIcon color="blue" size={24}>
            <IoMdMale />
          </ThemeIcon>
        )}
      </td>
      <td>{player.country ?? "N/A"}</td>
      <td>{player.name ?? "None"}</td>
    </tr>
  );
};

export default SearchResultSuggestion;
