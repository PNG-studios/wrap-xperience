import KeukenOverzicht from "@/components/api/keukensOverzicht";

const AdminPage: React.FC = () => {
  return (
    <div className="p-8 gap-10 flex justify-center flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Keuken Overzicht</h1>
      <KeukenOverzicht filterStatus={1} /> {/* Alleen actieve keukens weergeven */}
      <KeukenOverzicht filterStatus={0} /> {/* Alleen inactieve keukens weergeven */}
    </div>
  );
}

export default AdminPage;