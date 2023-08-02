import { Search } from "@mui/icons-material";
import { TextField, InputAdornment } from "@mui/material";
import { ChangeEventHandler, FunctionComponent } from "react";

interface SearchInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const SearchInput: FunctionComponent<SearchInputProps> = (props: SearchInputProps) => {
  return (
    <TextField
      placeholder="Search"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};
