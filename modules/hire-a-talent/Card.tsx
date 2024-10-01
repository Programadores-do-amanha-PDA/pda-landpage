import { useEffect, useState } from "react";
import { Student } from "@/app/api/student/_studentModel";
import { Column, Image, Link, Row, Text } from "@/common/components";

export interface CardProps {
  linkedin: string;
  facebook: string;
  twitter: string;
  whatsapp: string;
  student: Student;
}

const Card = (cardProps: CardProps) => {
  const [avatar, setAvatar] = useState(cardProps.student.avatar);
  const [slug, setSlug] = useState(cardProps.student.slug);
  const [name, setName] = useState(cardProps.student.name);
  const [city, setCity] = useState(cardProps.student.city);
  const [state, setState] = useState(cardProps.student.state);
  const [github, setGithub] = useState(cardProps.student.github);
  const [linkedin, setLinkedin] = useState(cardProps.student.linkedin);
  const [bio, setBio] = useState(cardProps.student.bio);
  const [clicked, setClicked] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const [facebookShare, setFacebookShare] = useState(
    cardProps.facebook.replace("slug", slug)
  );
  const [twitterShare, setTwitterShare] = useState(
    cardProps.twitter.replace("slug", slug)
  );
  const [whatsappShare, setWhatsappShare] = useState(
    cardProps.whatsapp.replace("slug", slug)
  );
  const [linkedinShare, setLinkedinShare] = useState(
    cardProps.linkedin.replace("slug", slug)
  );

  useEffect(() => {
    if (clicked) {
      fetch(`/api/student?currentSlug=${slug}`).then(async (res) => {
        const data: Student = await res.json();
        setAvatar(data.avatar);
        setSlug(data.slug);
        setName(data.name);
        setCity(data.city);
        setState(data.state);
        setGithub(data.github);
        setLinkedin(data.linkedin);
        setBio(data.bio);
        setFacebookShare(cardProps.facebook.replace("slug", data.slug));
        setTwitterShare(cardProps.twitter.replace("slug", data.slug));
        setWhatsappShare(cardProps.whatsapp.replace("slug", data.slug));
        setLinkedinShare(cardProps.linkedin.replace("slug", data.slug));
        setClicked(false);
      });
    }
  }, [clicked]);

  return (
    <Row className="">
      <Column>
        <Row className="mt-5 justify-between items-center self-center bg-secondary-400 w-96 md:w-[600px] rounded-xl">
          <Column>
            <Column className="justify-center md:justify-between items-center md:flex-row">
              <Column>
                <Column className="md:flex-row">
                  <Row className="ml-0 md:ml-3 mt-10 md:flex-col justify-center">
                    {avatar && (
                      <Image
                        height={120}
                        width={120}
                        className="rounded-full"
                        src={avatar}
                        alt=""
                      />
                    )}
                  </Row>

                  <Column>
                    <Row>
                      <Text>{name}</Text>
                    </Row>
                    <Row>
                      <Text>Estudante de programação</Text>
                    </Row>
                    <Row>
                      <Text>
                        {city}, {state}
                      </Text>
                    </Row>
                    <Link href={github} target="_blank">
                      <Row>
                        <Text>Acesse meu perfil no github</Text>
                        <Row>
                          <Image
                            height={16}
                            width={16}
                            src="/assets/ico_git.png"
                            alt=""
                          />
                        </Row>
                      </Row>
                    </Link>
                  </Column>
                </Column>
              </Column>

              <Column>
                <Link href={linkedin} target="_blank">
                  <Column>
                    <Row>
                      <Image
                        height={32}
                        width={51}
                        src="/assets/eye.png"
                        alt=""
                      />
                    </Row>
                    <Row>
                      <Text>Ver perfil Linkedin</Text>
                    </Row>
                  </Column>
                </Link>
              </Column>
            </Column>

            <Row>
              <Text>&quot; {bio} &quot;</Text>
            </Row>

            <Row></Row>

            <Row>
              <Column>
                <Text>
                  Compartilhe o perfil desse aluno e o ajude a ter mais
                  visibilidade
                </Text>
              </Column>

              <Column>
                <Row>
                  <Link target="_blank" href={linkedinShare}>
                    <Column>
                      <Image
                        width={22}
                        height={23}
                        src="/assets/linkedin.png"
                        alt=""
                      ></Image>
                    </Column>
                  </Link>
                  <Link target="_blank" href={facebookShare}>
                    <Column>
                      <Image
                        width={11}
                        height={22}
                        src="/assets/facebook.png"
                        alt=""
                      ></Image>
                    </Column>
                  </Link>
                  <Link target="_blank" href={twitterShare}>
                    <Column>
                      <Image
                        width={20}
                        height={17}
                        src="/assets/twitter.png"
                        alt=""
                      ></Image>
                    </Column>
                  </Link>
                  <Link target="_blank" href={whatsappShare}>
                    <Column>
                      <Image
                        width={20}
                        height={20}
                        src="/assets/whatsapp.png"
                        alt=""
                      ></Image>
                    </Column>
                  </Link>
                </Row>
              </Column>
            </Row>
          </Column>
        </Row>
        <Row></Row>
        <Row></Row>
        <Row>
          <Column
            onClick={() => {
              setClicked(true);
            }}
            onMouseOver={() => {
              setOpacity(0.6);
            }}
            onMouseOut={() => {
              setOpacity(1);
            }}
            onMouseUp={() => {
              setOpacity(1);
            }}
            onTouchStart={() => {
              setOpacity(0.6);
            }}
            onTouchEnd={() => {
              setOpacity(1);
            }}
            onMouseDown={() => {
              setOpacity(0.6);
            }}
          >
            <Text>Veja outro aluno</Text>
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>
              Algumas das habilidades que os alunos dos Programadores do Amanhã
              estão se desenvolvendo
            </Text>
          </Column>
        </Row>
        <Row>
          <Column>
            <Text>
              HTML, CSS, Javascript, Git/Github, Node, React, lógica de
              programação, soft skills e inglês
            </Text>
          </Column>
        </Row>
      </Column>
    </Row>
  );
};

export default Card;
