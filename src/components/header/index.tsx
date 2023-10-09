import React from 'react';
import { AppBarStyle, LinkStyle, TextFieldStyle, ContainerSearchIcons, LinkSection } from './styles';
import Toolbar from '@mui/material/Toolbar';
import Icon from '../../assets/uppy_logo.png'
import { Link } from 'react-router-dom';
import InputAdornment from '@mui/material/InputAdornment';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBagOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/NotificationsOutlined';
import Badge from '@mui/material-next/Badge';
import { IconButton } from '@mui/material';

function Header() {

  return (
      <AppBarStyle position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to={"/"}>
            <img src={Icon} alt="Icone Uppy" style={{padding: "0px 0px 0px 54px", width: "97px", height: "44px"}}/>
          </Link>
          <LinkStyle>
            <LinkSection>
              <Link to="/novidades" color="inherit" style={{textDecoration: "none"}}>
                Novidades
              </Link>
              <Link to="/produtos" color="inherit" style={{textDecoration: "none"}}>
                Todos os Produtos
              </Link>
              <Link to="/mais-vendidos" color="inherit" style={{textDecoration: "none"}}>
                Mais Vendidos
              </Link>
              <Link to="/atendimento" color="inherit" style={{textDecoration: "none"}}>
                Atendimento
              </Link>
            </LinkSection>
            <ContainerSearchIcons>
              <TextFieldStyle
                id="search"
                label="Pesquisar"
                variant="outlined"
                InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon color="inherit" />
                  </InputAdornment>
                  ),
                }}
              />
              <IconButton color="inherit" aria-label="notification">
                <NotificationsIcon style={{fontSize: 40}}/>
              </IconButton>
              <IconButton color="inherit" aria-label="shopping bag">
                <Badge 
                  badgeContent={1} 
                  color="primary"
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  >
                      <ShoppingBagIcon style={{fontSize: 40}}/>
                </Badge>
              </IconButton>
            </ContainerSearchIcons>
          </LinkStyle>
        </Toolbar>
      </AppBarStyle>
  );
}

export { Header };
