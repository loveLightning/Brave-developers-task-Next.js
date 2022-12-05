import { MainLayout } from "../components";
import Head from "next/head";
import { Home } from "../components/home";


const Index: React.FC = () => {
  return (
    <MainLayout>
      <Head>
        <title>Главная</title>
        <meta name="keywords" content="Терминал оплаты мобильного телефона" />
        <meta name="description" content="Онлайн оплата вашего оператора" />
        <meta charSet="utf-8" />
      </Head>
      <Home />
    </MainLayout>
  );
};

export default Index;
