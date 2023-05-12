import React, { useEffect, useState } from "react";
import { Header3, Label } from "../../styled-components/Typography";
import { Button } from "../../styled-components/Buttons";
import { ShareScreenContainer } from "./style";
import { withTheme } from "styled-components";
import { handleShareScreen } from "../../actions/questions";
import { shareScreen } from "../../utils/api";

const ShareScreen = ({ theme, handleHide }) => {
  const [formFields, setFormFields] = useState({ url: "", email: "" });
  const { email, url } = formFields;
  const handleChange = (e) => {
    setFormFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    shareScreen({ destinationEmail: email, urlContent: url });
    handleHide();
  };

  useEffect(() => {
    const currentLocation = window.location.href;
    setFormFields((prev) => ({
      ...prev,
      url: currentLocation,
    }));
  }, []);

  return (
    <ShareScreenContainer>
      <Header3>Share screen</Header3>
      <form id="share-screen">
        <Label>
          URL
          <input type="text" readOnly name="url" value={url} />
        </Label>
        <Label>
          email
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => handleChange(e)}
          />
        </Label>
      </form>
      <div>
        <Button
          form="share-screen"
          type="submit"
          backgroundColor={theme.colors.action}
          color={theme.colors.surface}
          width="100%"
          padding="8px"
          fontSize="14px"
          onClick={handleSubmit}
        >
          Share
        </Button>
        <Button
          type="button"
          backgroundColor={theme.colors.cancelAction}
          color={theme.colors.surface}
          width="100%"
          padding="8px"
          fontSize="14px"
          onClick={handleHide}
        >
          Cancel
        </Button>
      </div>
    </ShareScreenContainer>
  );
};

export default withTheme(ShareScreen);
