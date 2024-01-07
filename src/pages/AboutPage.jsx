import React from "react";
import { Container, Grid } from "@mui/material";

import myImage from "assets/images/card.jpg";
import PageHeader from "components/PageHeader";

export default function AboutPage() {
  return (
    <Container>
      <PageHeader
        title="About Page"
        subtitle="On this page, you can find explanations about using the application"
      />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignSelf="center" sx={{ color: "brown" }}>

          <p>
            Managing business cards and connections is important for any
            business for several reasons:
          </p>

          <ol>
            <li>
              <strong>Networking and Relationship Building:</strong>
              <ul>
                <li>
                  Business cards serve as tangible reminders of a meeting or
                  interaction.
                </li>
                <li>
                  Act as a quick and efficient way to exchange contact
                  information during networking events, conferences, or
                  meetings.
                </li>
                <li>
                  Facilitate the building of relationships, which is crucial for
                  business growth and opportunities.
                </li>
              </ul>
            </li>

            <li>
              <strong>Professionalism and Credibility:</strong>
              <ul>
                <li>
                  Well-designed business cards reflect professionalism and
                  attention to detail.
                </li>
                <li>
                  The exchange of business cards enhances the credibility of
                  individuals and businesses.
                </li>
              </ul>
            </li>

            <li>
              <strong>Memorability and Branding:</strong>
              <ul>
                <li>
                  A unique and well-branded business card helps individuals and
                  businesses stand out.
                </li>
                <li>
                  Acts as a visual representation of a brand, making it more
                  memorable for potential clients, partners, or investors.
                </li>
              </ul>
            </li>

            <li>
              <strong>Ease of Communication:</strong>
              <ul>
                <li>
                  Business cards provide essential contact information in a
                  compact form.
                </li>
                <li>
                  Make it easy for others to reach out for collaborations,
                  partnerships, or inquiries.
                </li>
              </ul>
            </li>

            <li>
              <strong>Effective Marketing Tool:</strong>
              <ul>
                <li>
                  Business cards serve as a cost-effective marketing tool that
                  can be distributed widely.
                </li>
                <li>
                  Include essential details about products, services, or a
                  company's value proposition, acting as a mini marketing
                  brochure.
                </li>
              </ul>
            </li>

            <li>
              <strong>Follow-Up and Growth:</strong>
              <ul>
                <li>
                  Business cards help in recalling and following up with
                  connections after networking events or meetings.
                </li>
                <li>
                  Nurture relationships over time, leading to potential
                  collaborations, partnerships, or business opportunities.
                </li>
              </ul>
            </li>

            <li>
              <strong>Global Business Etiquette:</strong>
              <ul>
                <li>
                  In many cultures, exchanging business cards is a standard and
                  expected practice in professional interactions.
                </li>
                <li>
                  Adhering to global business etiquette helps in creating a
                  positive and respectful impression.
                </li>
              </ul>
            </li>

            <li>
              <strong>Data Management and Organization:</strong>
              <ul>
                <li>
                  Implementing a system to manage and organize business cards
                  streamlines communication and follow-ups.
                </li>
                <li>
                  Enables businesses to maintain a database of contacts for
                  future reference and engagement.
                </li>
              </ul>
            </li>

            <li>
              <strong>Adaptation to Digital Platforms:</strong>
              <ul>
                <li>
                  Integrating digital tools and apps for managing business
                  contacts enhances efficiency.
                </li>
                <li>
                  Allows for seamless synchronization between physical business
                  cards and digital platforms.
                </li>
              </ul>
            </li>

            <li>
              <strong>Opportunities for Collaboration:</strong>
              <ul>
                <li>
                  Managing business cards facilitates the identification of
                  potential collaborators, suppliers, or clients.
                </li>
                <li>
                  Strengthens a business's network, providing a foundation for
                  future collaborations and growth.
                </li>
              </ul>
            </li>
          </ol>

          <p>
            In summary, effective management of business cards and connections
            is essential for fostering professional relationships, building
            credibility, and creating opportunities for business growth and
            success. It contributes to a business's overall strategy for
            networking, marketing, and long-term relationship development.
          </p>
        </Grid>
        <Grid
          item
          md={4}
          sx={{ display: { md: "flex", xs: "none" }, justifyContent: "center" }}
        >
          <img src={myImage} alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
}
