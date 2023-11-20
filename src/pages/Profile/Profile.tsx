import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Avatar, styled } from "@mui/material";
import MainTitle from "../../components/MainTitle/MainTitle";

interface UserProfile {
  name: string;
  email: string;
  role: string;
  image: string;
}

const Root = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start",
  padding: theme.spacing(2)
}));

const AvatarImage = styled(Avatar)(({ theme }) => ({
  width: "100px",
  height: "100px",
  marginRight: theme.spacing(4)
}));

const ProfilePage: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  const fetchUserProfile = () => {
    const userData: UserProfile = {
      name: "Nome do Usuário",
      email: "usuario@example.com",
      role: "Cargo do Usuário",
      image:
        "/images/empresario-prospero-mantem-as-maos-cruzadas-tem-expressao-satisfeita.jpg"
    };

    setUserProfile(userData);
  };

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <section>
      <MainTitle>Perfil do Usuário</MainTitle>
      <Root style={{ display: "flex", alignItems: "center" }}>
        <AvatarImage alt="Imagem do Usuário" src={userProfile?.image} />
        <CardContent>
          {userProfile ? (
            <div style={{ textAlign: "left" }}>
              <Typography variant="h6">
                <strong>Nome:</strong> {userProfile.name}
              </Typography>
              <Typography variant="h6">
                <strong>Email:</strong> {userProfile.email}
              </Typography>
              <Typography variant="h6">
                <strong>Cargo:</strong> {userProfile.role}
              </Typography>
            </div>
          ) : (
            <p>Carregando dados do usuário...</p>
          )}
        </CardContent>
      </Root>
    </section>
  );
};

export default ProfilePage;
