/* eslint-disable @next/next/no-img-element */
/* This example requires Tailwind CSS v2.0+ */
const stats = [
  { icon: "../../../MainStat/icon1.png", name: "Kampus", stat: "897" },
  { icon: "../../../MainStat/icon2.png", name: "Pesantren", stat: "586" },
  { icon: "../../../MainStat/icon3.png", name: "Beasiswa", stat: "245" },
];


import { Container } from "../../moleculs/UI/container";
import ContainerCategory from "../../moleculs/UI/container-category";

export default function MainStatic() {
  return (
    <section>
      <Container>
        <ContainerCategory name={"Statistik"} />
        <div className="mx-4 mt-4 ">
          <dl className="rounded-ful mx-auto grid grid-cols-3 gap-x-4 gap-y-4 sm:grid-cols-3 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-2 xl:grid-cols-3">
            {stats.map((item) => (
              <div key={item.name}>
                <div className="flex">
                  <div className="mr-1 flex-shrink-0 self-center">
                    <img src={item.icon} className="h-9 w-9" alt="icon" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">{item.stat}</h4>
                    <p className="mt-0 text-xs">{item.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
