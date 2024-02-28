import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import Container from "components/Container/Container";
import Navigation from "components/Navigation/Navigation";
import UserMenu from "components/UserMenu/UserMenu";

const SharedLayout = () => {
    return (
        <>
            <header>
                <Container>
                    <Navigation />
                    <UserMenu />
                </Container>
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