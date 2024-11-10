import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import  blog_pic  from "../../../../public/images/blog_pic.png";
import Image from "next/image";



export const SellerRegistration = ({clientName}) =>{

  return (


      <Body style={main}>
        <Container style={{...container, padding: "10px",paddingTop: "10px", paddingLeft:"29px",paddingRight:"29px"}}>
          <Section>
            <h3 style={{ ...paragraph, fontWeight: "600", fontSize: "13px",color:"#f87171" }}>Servphere</h3>

          </Section>
          <Section>
           
          </Section>
          <Section style={{ paddingBottom: "20px" }}>
            <Row>
              <Text style={paragraph}>
                Welcome and thank you for signing up to Servphere.
              </Text>

              <Text style={heading}>
                {clientName}, welcome to Servphere! 👋
              </Text>

              <Text style={{ ...paragraph, fontWeight: "700", fontSize: "20px" }}>
                Here are a few ways to get started
              </Text>

              <Section className="flex">

                <Row >

                  <Text style={{ ...paragraph, fontWeight: "600",fontSize: "16px" }}>
                    Step 1
                  </Text>

                  <Text style={{...paragraph, paddingLeft: "3px" }}>
                  Upload a professional photo, write a concise bio, and add any relevant links to showcase your expertise.
                  </Text>

                </Row>

              </Section>

              <Text style={{ ...paragraph, fontWeight: "600",fontSize: "16px" }}>
                Step 2
              </Text>

              <Text style={{...paragraph, paddingLeft: "3px" }}>
                Add your services or packages, with clear descriptions and upfront pricing to make it easy for customers to choose.
              </Text>

              <Text style={{ ...paragraph, fontWeight: "600",fontSize: "16px" }}>
                Step 3
              </Text>

              <Text style={{...paragraph, paddingLeft: "3px" }}>
                Sync your calendar to enable seamless online booking. Set your availability and start receiving appointments right away.
              </Text>

              <Text style={{ ...paragraph, fontWeight: "600",fontSize: "16px" }}>
                Step 4
              </Text>

              <Text style={{...paragraph, paddingLeft: "3px" }}>
                Promote your profile to your audience—on social media, via email, or wherever your clients are.
              </Text>

              <Text style={{ ...paragraph, fontWeight: "700", fontSize: "22px", paddingTop: "25px" }}>
                From blog
              </Text>

              <Img
                src = "https://utfs.io/f/1BpbBSgfWBPqU2Yz7AoqYRvIPkFA8VrQnONptsEDxTaHgi6z"
                width="250"
                height="83"
                alt='img'
              />
  
              <Text style={{ ...paragraph, fontWeight: "700", fontSize: "20px", paddingTop: "25px"  }}>
                Launch & Grow: Unlock Your Full Potential on Servfia
              </Text>

              <Text style={{...paragraph, paddingLeft: "3px" }}>
                Discover actionable tips for setting up, optimizing, and scaling your services with Servfia to boost revenue, save time, and grow your client base.
              </Text>

              <Button style={button}>
                Continue reading →
              </Button>
              
            </Row>
          </Section>

          <Hr style={hr} />

          <Section>
            <Row>
                     
              <Text style={footer}>
              Servphere, Inc., 888 Brannan St, San Francisco, CA 94103
              </Text>
 
            </Row>
          </Section>
        </Container>
      </Body>
 
  );
};


const main = {
  backgroundColor: "#F5F5F5",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: "#FFFFFF",
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
  maxWidth: "100%",
  borderRadius: "12px"
};

const userImage = {
  margin: "0 auto",
  marginBottom: "16px",
  borderRadius: "50%",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};



const button = {
  backgroundColor: "#ff5a5f",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "18px",
  fontWeight: "600",
  paddingTop: "19px",
  paddingBottom: "19px",
  textDecoration: "none",
  textAlign: "center",
  display: "block",
  width: "40%",
};

const link = {
  ...paragraph,
  color: "#ff5a5f",
  display: "block",
};

const reportLink = {
  fontSize: "14px",
  color: "#9ca299",
  textDecoration: "underline",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#9ca299",
  fontSize: "14px",
  marginBottom: "10px",
};
