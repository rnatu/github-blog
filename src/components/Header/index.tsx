import { HeaderContainer } from './styles';
import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={logo} alt="" />
      </div>
    </HeaderContainer>
  );
}
