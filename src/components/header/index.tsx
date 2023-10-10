import React, {useState} from 'react';
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
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Container } from '@material-ui/core';
interface IHeaderProps {
  action: boolean;
}


const Header: React.FC<IHeaderProps> = ({ action }) => {
  const matches = useMediaQuery('(max-width:600px)');

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Container maxWidth="lg">
      <AppBarStyle position="fixed" className={action ? "activyColor" : ""} >
        <Toolbar style={{ display: 'flex', justifyContent: matches ? 'center' : 'space-between'}} >
          {matches ? (
            <>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                <List>
                <ListItem button component={Link} to="/novidades">
                  <ListItemText primary="Novidades" />
                </ListItem>
                <ListItem button component={Link} to="/produtos">
                  <ListItemText primary="Produtos" />
                </ListItem>
                <ListItem button component={Link} to="/mais-vendidos">
                  <ListItemText primary="Mais vendidos" />
                </ListItem>
                <ListItem button component={Link} to="/atendimento">
                  <ListItemText primary="Atendimento" />
                </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <>
              <Link to={"/"}>
                <img src={Icon} alt="Icone Uppy" style={{ padding: "0px 0px 0px 54px", width: "97px", height: "44px" }} />
              </Link><LinkStyle className='LinkStyle'>
                <LinkSection>
                  <Link to="/novidades" color="inherit" style={{ textDecoration: "none" }}>
                    Novidades
                  </Link>
                  <Link to="/produtos" color="inherit" style={{ textDecoration: "none" }}>
                    Todos os Produtos
                  </Link>
                  <Link to="/mais-vendidos" color="inherit" style={{ textDecoration: "none" }}>
                    Mais Vendidos
                  </Link>
                  <Link to="/atendimento" color="inherit" style={{ textDecoration: "none" }}>
                    Atendimento
                  </Link>
                </LinkSection>
                <ContainerSearchIcons>
                  <TextFieldStyle
                    id="search"
                    className="TextField"
                    label="Pesquisar"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon color="inherit" />
                        </InputAdornment>
                      ),
                    }} />
                  <IconButton color="inherit" aria-label="notification">
                    <NotificationsIcon style={{ fontSize: 40 }} />
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
                      <ShoppingBagIcon style={{ fontSize: 40 }} />
                    </Badge>
                  </IconButton>
                </ContainerSearchIcons>
              </LinkStyle>
            </>
          )}
        </Toolbar>
      </AppBarStyle>
    </Container>
  );
}

export { Header };
