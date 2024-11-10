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
  import { Images } from "lucide-react";
  import  blog_pic  from "../../../../public/images/blog_pic.png";
  import Image from "next/image";
  
  
  export default async function Page({
    time,
    clientName,
    service,
    duration
  }){
  
    return (
  
  
        <Body style={main}>
          <Container style={container}>
            <Section>
              <h3 className='block text-center text-lg text-[#f57575] font-semibold'>Servphere</h3>
  
            </Section>
            <Section>
             
            </Section>
            <Section style={{ paddingBottom: "20px" }}>
              <Row>
                <Text style={heading}>
                    Your booking is coming up                
                </Text>
            
                <Text style={{...paragraph, fontSize: "16px"}}>
                    Upcoming appointment                
                </Text>

                <div className="p-5 w-1/2 rounded-lg border border-gray-200">

                    <Text style={{ ...paragraph, fontWeight: "700", fontSize: "20px" }}>
                        Appointment details              
                    </Text>

                    <Text style={{...paragraph,color: 'darkgray', fontSize: "17px"}}>
                        Time                
                    </Text>

                    <Text style={{...paragraph,fontSize: "17px"}}>
                        {time}               
                    </Text>

                    <Text style={{...paragraph,color: 'darkgray', fontSize: "17px"}}>
                        Your appointment is with                
                    </Text>

                    <Text style={{...paragraph,fontSize: "17px"}}>
                        {clientName}                   
                    </Text>

                    <Text style={{...paragraph,color: 'darkgray', fontSize: "17px"}}>
                        Service                
                    </Text>

                    <Text style={{...paragraph,fontSize: "17px"}}>
                        {service}               
                    </Text>

                    <Text style={{...paragraph,color: 'darkgray', fontSize: "17px"}}>
                        Duration                
                    </Text>

                    <Text style={{...paragraph,fontSize: "17px"}}>
                      {duration}
                    </Text>

                </div>
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
    backgroundColor: "#ffffff",
    fontFamily:
      '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  };
  
  const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
    maxWidth: "100%",
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
  
  const review = {
    ...paragraph,
    padding: "24px",
    backgroundColor: "#f2f3f3",
    borderRadius: "4px",
  };
  
  const button = {
    backgroundColor: "#ff5a5f",
    borderRadius: "3px",
    color: "#fff",
    fontSize: "18px",
    paddingTop: "19px",
    paddingBottom: "19px",
    textDecoration: "none",
    textAlign: "center",
    display: "block",
    width: "100%",
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
  