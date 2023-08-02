import { useState, useEffect, ReactNode, Fragment } from "react";

// react-router components


// @mui material components
import Icon from "@mui/material/Icon";
import Popper from "@mui/material/Popper";
import Grow, { GrowProps } from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";
import Container from "@mui/material/Container";
import { Theme } from "@mui/material/styles";

// Material Dashboard 2 PRO React TS components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

// Material Dashboard 2 PRO React TS Base Styles
import { breakpoints } from "../../theme";

// Material Dashboard 2 PRO React context
import { useMediaQuery } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Declaring props types for DefaultNavbar
interface Props {
  routes: {
    [key: string]:
    | ReactNode
    | string
    | {
      [key: string]: string | any;
    }[];
  }[];
  brand?: string;
  transparent?: boolean;
  light?: boolean;
  action?: {
    type: "external" | "internal";
    route: string;
    color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "light";
    label: string;
    clickButton: (value: boolean) => void
  };
}

interface NewGrowTypes extends GrowProps {
  sx: any;
  [key: string]: any;
}

function NewGrow(props: NewGrowTypes) {
  return <Grow {...props} />;
}

function DefaultNavbar({ routes, brand, transparent, light, action }: Props): JSX.Element {

  const [dropdown, setDropdown] = useState<any>("");
  const [dropdownEl, setDropdownEl] = useState<any>("");
  const [dropdownName, setDropdownName] = useState<any>("");
  const [nestedDropdown, setNestedDropdown] = useState<any>("");
  const [nestedDropdownEl, setNestedDropdownEl] = useState<any>("");
  const [nestedDropdownName, setNestedDropdownName] = useState<any>("");
  const [arrowRef, setArrowRef] = useState<any>(null);
  const [mobileNavbar, setMobileNavbar] = useState<boolean>(false);
  const [mobileView, setMobileView] = useState<boolean>(false);

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  // Render the routes on the dropdown menu
  const renderRoutes = routes.map(({ name, collapse, columns, rowsPerColumn }: any) => {
    let template;

    // Render the dropdown menu that should be display as columns
    if (collapse && columns && name === dropdownName) {
      const calculateColumns = collapse.reduce((resultArray: any, item: any, index: any) => {
        const chunkIndex = Math.floor(index / rowsPerColumn);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, []);

      template = (
        <Grid key={name} container spacing={3} py={1} px={1.5}>
          {calculateColumns.map((cols: any, key: any) => {
            const gridKey = `grid-${key}`;
            const dividerKey = `divider-${key}`;

            return (
              <Grid key={gridKey} item xs={12 / columns} sx={{ position: "relative" }}>
                {cols.map((col: any, index: any) => (
                  <Fragment key={col.name}>
                    <Box
                      width="100%"
                      display="flex"
                      alignItems="center"
                      py={1}
                      mt={index !== 0 ? 2 : 0}
                    >
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width="1.5rem"
                        height="1.5rem"
                        borderRadius="md"
                        color="text"
                        mr={1}
                        fontSize="1rem"
                        lineHeight={1}
                      >
                        {col.icon}
                      </Box>
                      <Typography
                        display="block"
                        variant="button"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        {col.name}
                      </Typography>
                    </Box>
                    {col.collapse.map((item: any) => (
                      <Typography
                        key={item.name}
                        // to={item.route ? item.route : ""}
                        // href={item.href ? item.href : (e: any) => e.preventDefault()}
                        // target={item.href ? "_blank" : ""}
                        rel={item.href ? "noreferrer" : "noreferrer"}
                        // minWidth="11.25rem"
                        // display="block"
                        // variant="button"
                        // color="text"
                        // textTransform="capitalize"
                        // fontWeight="regular"
                        // py={0.625}
                        // px={2}
                        sx={{
                          borderRadius: '0.375rem',
                          cursor: "pointer",
                          transition: "all 300ms linear",

                          "&:hover": {
                            // backgroundColor: grey[200],
                            // color: dark.main,
                          },
                        }}
                      >
                        {item.name}
                      </Typography>
                    ))}
                  </Fragment>
                ))}
                {key !== 0 && (
                  <Divider
                    key={dividerKey}
                    orientation="vertical"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "-4px",
                      transform: "translateY(-45%)",
                      height: "90%",
                    }}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      );

      // Render the dropdown menu that should be display as list items
    } else if (collapse && name === dropdownName) {
      template = collapse.map((item: any) => {
        const linkComponent = {
          component: MuiLink,
          href: item.href,
          target: "_blank",
          rel: "noreferrer",
        };

        const routeComponent = {
          component: Link,
          to: item.route,
        };

        return (
          <Typography
            key={item.name}
            {...(item.route ? routeComponent : linkComponent)}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            variant="button"
            textTransform="capitalize"
            minWidth={item.description ? "14rem" : "12rem"}
            color={item.description ? "dark" : "text"}
            fontWeight={item.description ? "bold" : "regular"}
            py={item.description ? 1 : 0.625}
            px={2}
            sx={{
              borderRadius: '0.375rem',
              cursor: "pointer",
              transition: "all 300ms linear",
            }}
            onMouseEnter={({ currentTarget }: any) => {
              if (item.dropdown) {
                setNestedDropdown(currentTarget);
                setNestedDropdownEl(currentTarget);
                setNestedDropdownName(item.name);
              }
            }}
            onMouseLeave={() => {
              if (item.dropdown) {
                setNestedDropdown(null);
              }
            }}
          >
            {item.description ? (
              <Box display="flex" py={0.25} fontSize="1rem" color="text">
                {typeof item.icon === "string" ? (
                  <Icon color="inherit">{item.icon}</Icon>
                ) : (
                  <Box color="inherit">{item.icon}</Box>
                )}
                <Box pl={1} lineHeight={0}>
                  <Typography
                    variant="button"
                    display="block"
                    fontWeight="bold"
                    textTransform="capitalize"
                  >
                    {item.name}
                  </Typography>
                  <Typography variant="button" fontWeight="regular" color="text">
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box display="flex" alignItems="center" color="text">
                <Icon sx={{ mr: 1 }}>{item.icon}</Icon>
                {item.name}
              </Box>
            )}
            {item.collapse && (
              <Icon sx={{ fontWeight: "normal", verticalAlign: "middle", mr: -0.5 }}>
                keyboard_arrow_right
              </Icon>
            )}
          </Typography>
        );
      });
    }

    return template;
  });

  // Routes dropdown menu
  const dropdownMenu = (
    <Popper
      anchorEl={dropdown}
      popperRef={null}
      open={Boolean(dropdown)}
      placement="top-start"
      transition
      style={{ zIndex: 10 }}
      modifiers={[
        {
          name: "arrow",
          enabled: true,
          options: {
            element: arrowRef,
          },
        },
      ]}
      onMouseEnter={() => setDropdown(dropdownEl)}
      onMouseLeave={() => {
        if (!nestedDropdown) {
          setDropdown(null);
          setDropdownName("");
        }
      }}
    >
      {({ TransitionProps }) => (
        <NewGrow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: '#ffffff',
          }}
        >
          <Box borderRadius="lg">
            <Typography variant="h1" color="white">
              <Icon ref={setArrowRef} sx={{ mt: -3 }}>
                arrow_drop_up
              </Icon>
            </Typography>
            <Box
                sx={{
                    boxShadow: '0 0 10px 0 rgb(0 0 0 / 10%)',
                }}
            borderRadius="lg" p={1.625} mt={1}>
              {renderRoutes}
            </Box>
          </Box>
        </NewGrow>
      )}
    </Popper>
  );

  // Render routes that are nested inside the dropdown menu routes
  const renderNestedRoutes = routes.map(({ collapse, columns }: any) =>
    collapse && !columns
      ? collapse.map(({ name: parentName, collapse: nestedCollapse }: any) => {
        let template;

        if (parentName === nestedDropdownName) {
          template =
            nestedCollapse &&
            nestedCollapse.map((item: any) => {
              const linkComponent = {
                component: MuiLink,
                href: item.href,
                target: "_blank",
                rel: "noreferrer",
              };

              const routeComponent = {
                component: Link,
                to: item.route,
              };

              return (
                <Typography
                  key={item.name}
                  {...(item.route ? routeComponent : linkComponent)}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  variant="button"
                  textTransform="capitalize"
                  minWidth={item.description ? "14rem" : "12rem"}
                  color={item.description ? "dark" : "text"}
                  fontWeight={item.description ? "bold" : "regular"}
                  py={item.description ? 1 : 0.625}
                  px={2}
                  sx={{
                    borderRadius: '0.375rem',
                    cursor: "pointer",
                    transition: "all 300ms linear",
                  }}
                >
                  {item.description ? (
                    <Box>
                      {item.name}
                      <Typography
                        display="block"
                        variant="button"
                        color="text"
                        fontWeight="regular"
                        sx={{ transition: "all 300ms linear" }}
                      >
                        {item.description}
                      </Typography>
                    </Box>
                  ) : (
                    item.name
                  )}
                  {item.collapse && (
                    <Icon
                      fontSize="small"
                      sx={{ fontWeight: "normal", verticalAlign: "middle", mr: -0.5 }}
                    >
                      keyboard_arrow_right
                    </Icon>
                  )}
                </Typography>
              );
            });
        }

        return template;
      })
      : null
  );

  // Dropdown menu for the nested dropdowns
  const nestedDropdownMenu = (
    <Popper
      anchorEl={nestedDropdown}
      popperRef={null}
      open={Boolean(nestedDropdown)}
      placement="right-start"
      transition
      style={{ zIndex: 10 }}
      onMouseEnter={() => {
        setNestedDropdown(nestedDropdownEl);
      }}
      onMouseLeave={() => {
        setNestedDropdown(null);
        setNestedDropdownName("");
        setDropdown(null);
      }}
    >
      {({ TransitionProps }) => (
        <NewGrow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: '#ffffff',
          }}
        >
          <Box ml={2.5} mt={-2.5} borderRadius="lg">
            <Box 
                sx={{
                    boxShadow: '0 0 10px 0 rgb(0 0 0 / 10%)'
                }} borderRadius="lg" py={1.5} px={1} mt={2}>
              {renderNestedRoutes}
            </Box>
          </Box>
        </NewGrow>
      )}
    </Popper>
  );
  const isLargeScreen = useMediaQuery('(min-width:1280px)')
  const isSmallScreen = useMediaQuery('(max-width:600px)')
  const isMobile = useMediaQuery('(max-width:520px)')
  const router = useRouter()

  return (
    <Container>
      <Box
        py={1}
        px={{ xs: 2, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }} 
        my={3}
        mx={{ xs: 3, md: '150px', xl: '350px' }} 
        width={{ xs: 'calc(100% - 48px)', md: 'calc(100% - 300px)', xl: "calc(100% - 700px)" }} 
        borderRadius="lg"
        color={light ? "white" : "dark"}
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        left={0}
        zIndex={3}
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
          boxShadow: '0 0 10px 0 rgb(0 0 0 / 10%)'
        }}
      >
        <Box
          py={transparent ? 1.5 : 0.75}
          lineHeight={1}
          pl={ isLargeScreen ? 1 : 0 }
          height={ isLargeScreen ? 80 : isSmallScreen ? 50 : 60 }
        >
          <Typography marginRight='15px' variant="button" fontWeight="bold" color={light ? "white" : "dark"}>
            <img src={'/quizedulogo.png'} alt='quizedu' style={{height: '100%'}}/>
          </Typography>
        </Box>

        {action &&
          (action.type === "internal" ? (
            <Box
              whiteSpace='nowrap'
              display="inline-block">
              <Button
                color="success"
                variant='contained'
                sx={{
                  boxShadow: '0rem 0.1875rem 0.1875rem 0rem rgb(76 175 80 / 15%), 0rem 0.1875rem 0.0625rem -0.125rem rgb(76 175 80 / 20%), 0rem 0.0625rem 0.3125rem 0rem rgb(76 175 80 / 15%)',
                  fontFamily: 'Asap',
                  fontWeight: 700,
                  backgroundColor: '#4caf50',
                  fontSize: isSmallScreen ? '1rem' : '1.2rem',
                  paddingX: isSmallScreen ? 2 :3,
                  borderRadius: 45,
                  marginRight: isLargeScreen ? 4 : isSmallScreen ? 1 : 2,
                  '&:hover': {
                    backgroundColor: '#4caf50',
                    boxShadow: '0rem 0.875rem 1.625rem -0.75rem rgb(76 175 80 / 40%), 0rem 0.25rem 1.4375rem 0rem rgb(76 175 80 / 15%), 0rem 0.5rem 0.625rem -0.3125rem rgb(76 175 80 / 20%)',
                  }
                }}
                onClick={() => {
                  router.push('/pris')
                }}
              >
                Pris
              </Button>
              <Button
                color="primary"
                variant='outlined'
                sx={{
                  fontFamily: 'Asap',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  color: '#344767',
                  border: '0.0625rem solid #344767',
                  paddingY:isSmallScreen? '0.375rem': '0.625rem',
                  borderRadius: 45,
                  paddingX: isLargeScreen ? 5 : 2,
                  marginRight: isLargeScreen ? 4 : isSmallScreen ? 1 : 2,
                }}
                onClick={() => {
                    router.push('/cards/generator')
                }}
              >
                 Fortsæt
              </Button>
              <Button
                onClick={() => action.clickButton(true)}
                variant="contained"
                color="error"
                size="small"
                sx={{
                  borderRadius: 45,
                  minWidth: 64,
                  backgroundColor: '#f44335',
                  fontWeight: 700,
                  boxShadow: '0rem 0.1875rem 0.1875rem 0rem rgb(244 67 53 / 15%), 0rem 0.1875rem 0.0625rem -0.125rem rgb(244 67 53 / 20%), 0rem 0.0625rem 0.3125rem 0rem rgb(244 67 53 / 15%)',
                  '&:hover': {
                    backgroundColor: '#f44335',
                    boxShadow: '0rem 0.875rem 1.625rem -0.75rem rgb(244 67 53 / 40%), 0rem 0.25rem 1.4375rem 0rem rgb(244 67 53 / 15%), 0rem 0.5rem 0.625rem -0.3125rem rgb(244 67 53 / 20%)'
                  },
                  fontFamily: 'Asap',
                  paddingY:isSmallScreen? '0.375rem': '0.625rem',
                  fontSize: '0.75rem',
                  paddingX: isLargeScreen ? 5 : 2,
                }}
              >
                {action.label}
              </Button>
            </Box>
          ) : (
            <Box display={{ xs: "none", lg: "inline-block" }}>
              <Button
                component="a"
                href={action.route}
                target="_blank"
                rel="noreferrer"
                variant="contained"
                color="error"
                size="small"
                sx={{ mt: -0.3 }}
              >
                {action.label}
              </Button>
            </Box>
          ))}
      </Box>
      {dropdownMenu}
      {nestedDropdownMenu}
    </Container>
  );
}

// Declaring default props for DefaultNavbar
DefaultNavbar.defaultProps = {
  brand: "QuizEdu.dk",
  transparent: false,
  light: false,
  action: false,
};

export default DefaultNavbar;
