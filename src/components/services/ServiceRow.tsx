import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import type { Service } from "@/lib/types";

type Props = {
  service: Service;
  index: number;
};

export function ServiceRow({ service, index }: Props) {
  const delay = ((index % 4) + 1) as 1 | 2 | 3 | 4;
  return (
    <Reveal as="div" delay={delay} className="svc-card-wrap">
      <Link
        href={`/services/${service.slug}`}
        className="svc-card"
        aria-label={`${service.name} — ${service.tag}`}
      >
        <div
          className="svc-img"
          style={{ backgroundImage: `url(${service.img})` }}
          aria-hidden="true"
        >
          <span className="svc-num">{service.num}</span>
        </div>

        <div className="svc-body">
          <span className="svc-tag">{service.tag}</span>
          <h3 className="svc-name">{service.name}</h3>
          <p className="svc-desc">{service.desc}</p>
          <div className="svc-meta">
            <span className="svc-price">{service.price}</span>
            <span className="svc-dur">{service.duration}</span>
          </div>
          <span className="svc-cta" aria-hidden="true">
            Explore <span className="svc-arrow">↗</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
