import GetDataNext from "@/components/GetDataNext";
import GetDataReact from "@/components/GetDataReact";
import classes from "@/components/TestingPage.module.css";

export default function TestingPage() {
  return (
    <>
      <div className={classes["page-grid"]}>
        <GetDataNext />
        <GetDataReact />
      </div>
    </>
  );
}
