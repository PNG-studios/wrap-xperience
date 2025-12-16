import Styles from "./page.module.css";
import KeukenOverzicht from "@/components/api/keukensOverzicht";

const AdminPage: React.FC = () => {
  return (
    <div className={Styles.container_categories}>
      <h1 className={Styles.title}>Keuken Overzicht</h1>
      <KeukenOverzicht filterStatus={1} /> {/* Alleen actieve keukens weergeven */}
      <KeukenOverzicht filterStatus={0} /> {/* Alleen inactieve keukens weergeven */}
    </div>
  );
}

export default AdminPage;