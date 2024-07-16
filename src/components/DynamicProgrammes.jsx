import React, { useState } from 'react';
import ProgramCard from './ProgramCard';
import Filter from './Filter';

const programsData = [
  {
    id: 1,
    title: 'Community Support Program',
    description: 'Providing resources and support to local communities.',
    category: 'Community',
    year: '2022',
    impactArea: 'Local',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Health Awareness Campaign',
    description: 'Raising awareness about health and wellness.',
    category: 'Health',
    year: '2021',
    impactArea: 'National',
    image: 'https://via.placeholder.com/300',
  },
  // Add more programs here...
];

const DynamicProgrammes = () => {
  const [filters, setFilters] = useState({ year: '', category: '', impactArea: '' });

  const filteredPrograms = programsData.filter((program) => {
    return (
      (filters.year === '' || program.year === filters.year) &&
      (filters.category === '' || program.category === filters.category) &&
      (filters.impactArea === '' || program.impactArea === filters.impactArea)
    );
  });

  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Programmes</h2>
        <Filter filters={filters} setFilters={setFilters} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicProgrammes;
