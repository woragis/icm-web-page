import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  StyledDialog,
  StyledProfile,
  DialogOverlay,
  DialogBox,
  CloseButton,
} from "./style";
import { FC, ReactNode, useState } from "react";
interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}
const Dialog: FC<DialogProps> = ({
  isOpen,
  onClose,
  children,
}: DialogProps) => {
  if (!isOpen) return null;

  return (
    <DialogOverlay>
      <DialogBox>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </DialogBox>
    </DialogOverlay>
  );
};

const Profile = () => {
  const { isLogged } = useAuth();
  const [pfpModal, setPfpModal] = useState<boolean>(false);
  const togglePfpModal = () => {
    setPfpModal(!pfpModal);
  };
  return (
    <StyledProfile>
      <button onClick={togglePfpModal}>
        <picture>Profile Photo</picture>
      </button>
      {pfpModal && (
        <StyledDialog>
          {isLogged ? (
            <ul>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
          ) : (
            <StyledDialog>
              <ul>
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </StyledDialog>
          )}
        </StyledDialog>
      )}
    </StyledProfile>
  );
};

export default Profile;
