import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Avatar, styled } from "@mui/material";
import MainTitle from "../../components/MainTitle/MainTitle";

// Exemplo de interface para representar os dados do usuário.
interface UserProfile {
  name: string;
  email: string;
  role: string;
  image: string;
  // Outros campos do perfil do usuário
}

const Root = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "flex-start", // Alinha os itens à esquerda
  padding: theme.spacing(2)
}));

const AvatarImage = styled(Avatar)(({ theme }) => ({
  width: "100px",
  height: "100px",
  marginRight: theme.spacing(4)
}));

const ProfilePage: React.FC = () => {
  // Estado para armazenar os dados do usuário.
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  // Simulando uma função para carregar os dados do usuário (pode ser uma chamada à API real).
  const fetchUserProfile = () => {
    // Suponha que você obtenha os dados do usuário de alguma fonte.
    const userData: UserProfile = {
      name: "Nome do Usuário",
      email: "usuario@example.com",
      role: "Cargo do Usuário",
      image:
        "/images/empresario-prospero-mantem-as-maos-cruzadas-tem-expressao-satisfeita.jpg"
      // Preencha com outros dados do perfil do usuário.
    };

    // Define os dados do usuário no estado.
    setUserProfile(userData);
  };

  useEffect(() => {
    // Chama a função para carregar os dados do usuário quando o componente é montado.
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
              {/* Adicione outros campos relevantes do perfil aqui */}
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
