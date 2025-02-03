import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { Alert, Col, Row } from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col md="9">
        {account?.login ? (
          <div>
            <Alert color="success">Você está logado como &quot;{account.login}&quot;.</Alert>
          </div>
        ) : (
          <div>
            <Alert color="warning">
              <span>&nbsp;</span>
              <Link to="/login" className="alert-link">
                entrar
              </Link>
              , utilize as seguintes contas padrões:
              <br />- Administrador (usuário=&quot;admin&quot; and senha=&quot;admin&quot;) <br />- Usuário (usuário=&quot;user&quot; e
              senha=&quot;user&quot;).
            </Alert>

            <Alert color="warning">
              Não possui uma conta ainda?&nbsp;
              <Link to="/account/register" className="alert-link">
                Crie uma nova conta
              </Link>
            </Alert>
          </div>
        )}
      </Col>
    </Row>
  );
};

export default Home;
