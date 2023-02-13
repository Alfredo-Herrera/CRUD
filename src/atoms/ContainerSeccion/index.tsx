import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { FC } from 'react';

const ContainerHome = styled(Grid)`
  height: 900px;
  ${(props) => props.theme.breakpoints.up('sm')} {
    height: 1286px;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    height: 700px;
  }
`;

const ContainerVideo = styled(Grid)`
  height: 1272px;
  ${(props) => props.theme.breakpoints.up('sm')} {
    height: 1643px;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    height: 1420px;
  }
`;

const ContainerTools = styled(Grid)`
  height: 464px;
  text-align: center;
  ${(props) => props.theme.breakpoints.up('sm')} {
    height: 588px;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    height: 540px;
    text-align: inherit;
  }
`;

const ContainerFooter = styled(Grid)`
  height: 596px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${(props) => props.theme.breakpoints.up('sm')} {
    height: 504px;
    margin: 0px 40px 0px 40px;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    height: 504px;
    margin: 0px 112px 0px 112px;
  }
`;

interface Props {
  children: React.ReactElement | React.ReactNode;
  typeContainer: string;
}

const ContainerSeccion: FC<Props> = ({ children, typeContainer }) => {
  if (typeContainer === 'Home')
    return <ContainerHome container> {children}</ContainerHome>;
  if (typeContainer === 'Footer')
    return <ContainerFooter container> {children} </ContainerFooter>;
  if (typeContainer === 'Tools')
    return <ContainerTools container>{children}</ContainerTools>;

  return <ContainerVideo container> {children}</ContainerVideo>;
};

export default ContainerSeccion;
