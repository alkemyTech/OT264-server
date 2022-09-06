'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'Organizations',
      [
        {
          name: 'ONG - Somos Más',
          image: 'https://placeimg.com/640/480/arch',
          address: null,
          phone: null,
          email: 'somosfundacionmas@gmail.com',
          welcomeText: 'Juntos por el Cambio Social',
          aboutUsText: `Desde 1997 en Somos Más trabajamos con los chicos y chicas,
            mamás y papás, abuelos y vecinos del barrio La Cava generando
            procesos de crecimiento y de inserción social. Uniendo las manos de
            todas las familias, las que viven en el barrio y las que viven fuera de
            él, es que podemos pensar, crear y garantizar estos procesos. Somos
            una asociación civil sin fines de lucro que se creó en 1997 con la
            intención de dar alimento a las familias del barrio. Con el tiempo
            fuimos involucrándonos con la comunidad y agrandando y mejorando
            nuestra capacidad de trabajo. Hoy somos un centro comunitario que
            acompaña a más de 700 personas a través de las áreas de:
            Educación, deportes, primera infancia, salud, alimentación y trabajo
            social.`,
          urlFacebook: 'Somos_Más',
          urlInstagram: 'SomosMás',
          urlLinkedin: 'Fundacion_Somos_Más',
          createdAt: new Date(),
          updatedAt: new Date(),
          deletedAt: null
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Organizations', null, {});
  }
};
