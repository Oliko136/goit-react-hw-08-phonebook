import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/selectors";
import { Loader } from "components/Loader/Loader";
import Container from "components/Container/Container";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import styles from './SharedLayout.module.css';


const SharedLayout = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    
    return (
        <>
            <header className={styles.header}>
                    <Navigation />
                    {isLoggedIn && <UserMenu />}
            </header>
            <main>
                <Container>
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </Container>
            </main>
        </>
    )
}

export default SharedLayout;