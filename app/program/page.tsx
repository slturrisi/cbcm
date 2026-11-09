import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import BiochemicalProblem from "@/components/program/BiochemicalProblem";
import DrugResidues from "@/components/program/DrugResidues";
import EnvironmentalToxins from "@/components/program/EnvironmentalToxins";
import FreshStart from "@/components/program/FreshStart";
import Hero from "@/components/program/Hero";
import Nutrition from "@/components/program/Nutrition";
import ProgramMaterials from "@/components/program/ProgramMaterials";
import Precision from "@/components/program/Precision";
import ProgramCTA from "@/components/program/ProgramCTA";
import PurificationProgram from "@/components/program/PurificationProgram";

export default function ProgramPage() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <BiochemicalProblem />
        <DrugResidues />
        <EnvironmentalToxins />
        <PurificationProgram />
        <Nutrition />
        <Precision />
        <ProgramMaterials />
        <FreshStart />
        <ProgramCTA />
      </main>

      <Footer />
    </>
  );
}