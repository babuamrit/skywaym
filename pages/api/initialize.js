import getSession from "../../db/db";

const config = {
  collection1: "pages",
  collection2: "sections",
  schema: "skymsproject",
};
export default async function (req, res) {
  const data = await getSession();
  if (!data.success) {
    res.status(500).json({ data });
    return null;
  }
  const session = data.session;
  const schema = session.getSchema(config.schema);

  schema
    .existsInDatabase()
    .then((exists) => {
      if (exists) {
        return schema;
      }
      return session.createSchema(config.schema);
    })
    .then((schema) => {
      return schema.createCollection(config.collection1, {
        reuseExisting: true,
      });
    })
    .then((pages) => {
      return schema
        .createCollection(config.collection2, {
          reuseExisting: true,
        })
        .then((sections) => {
          sections
            .add([
              {
                type: "licencebanner",
                data: {
                  rgdno: "Regd. No. : 66236 / 066 / 067",
                  LicNo: "Lic No. 900 / 067 / 068",
                },
              },
              {
                type: "APPBAR",
                data: {
                  logo: "logo.PNG",
                  pages: [
                    {
                      type: "link",
                      name: "HOME",
                      link: "/",
                    },
                    {
                      type: "link",
                      name: "ABOUTUS",
                      link: "/ABOUTUS",
                    },
                    {
                      type: "link",
                      name: "SERVICES",
                      link: "/SERVICES",
                    },
                    {
                      type: "link",
                      name: "WHY US",
                      link: "/WHYUS",
                    },
                    {
                      type: "link",
                      name: "CLIENT",
                      link: "/CLIENT",
                    },
                    {
                      type: "DROPDOWN",
                      name: "GALLERY",
                      items: [
                        {
                          type: "link",
                          name: "PHOTOS",
                          link: "/PHOTOS",
                        },
                        {
                          type: "link",
                          name: "VIDEOS",
                          link: "/VIDEOS",
                        },
                      ],
                    },
                    {
                      type: "link",
                      name: "JOB OPENING",
                      link: "/",
                    },
                    {
                      type: "link",
                      name: "CONTACT US",
                      link: "/",
                    },
                  ],
                  apply: "/apply",
                },
              },
              {
                type: "CAROUSAL",
                data: [
                  {
                    img: "",
                  },
                  {
                    img: "",
                  },
                  {
                    img: "",
                  },
                ],
              },

              {
                type: "INTRODUCTION",
                data: {
                  image: "",
                  text: "",
                },
              },

              {
                type: "SERVICES",
                data: [
                  {
                    image: "",
                    text: "",
                  },
                  {
                    image: "",
                    text: "",
                  },
                  {
                    image: "",
                    text: "",
                  },
                  {
                    image: "",
                    text: "",
                  },
                  {
                    image: "",
                    text: "",
                  },
                  {
                    image: "",
                    text: "",
                  },
                  {
                    image: "",
                    text: "",
                  },
                  {
                    image: "",
                    text: "",
                  },
                ],
              },

              {
                type: "JOBS",
                data: [
                  {
                    image: "",
                    text: "",
                  },
                  {
                    image: "",
                    text: "",
                  },
                  {
                    image: "",
                    text: "",
                  },
                  {
                    image: "",
                    text: "",
                  },
                  {
                    image: "",
                    text: "",
                  },
                  {
                    image: "",
                    text: "",
                  },
                ],
              },

              {
                type: "CLIENT",
                data: [
                  {
                    image: "",
                    text: "",
                  },
                  {
                    image: "",
                    text: "",
                  },
                  {
                    image: "",
                    text: "",
                  },
                  {
                    image: "",
                    text: "",
                  },
                  {
                    image: "",
                    text: "",
                  },
                  {
                    image: "",
                    text: "",
                  },
                ],
              },

              {
                type: "CONTACTUS",
                data: {
                  name: "",
                  email: "",
                  address: "",
                },
              },
            ])
            .execute();
        });
    });

  res.status(200).json({ data });
}
