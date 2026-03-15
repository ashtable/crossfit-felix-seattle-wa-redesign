
import React from 'react';
import Card from '../ui/Card';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'David Israel',
    title: 'Owner',
    nickname: 'Izzy',
    imageUrl: '/images/Izzy.jpg',
    bio: 'I’ve been doing CrossFit for about 10 years now, and I’m for sure no Rich Froning, but I love it nonetheless.'
  },
  {
    name: 'Potato',
    title: 'Chief Morale Officer',
    imageUrl: '/images/Potato-1-768x1024.jpg',
    bio: 'I spend most of my mornings at Felix. From 6am until my parents take me home.'
  },
  {
    name: 'Stephen Todd',
    title: 'Coach',
    imageUrl: '/images/Stephen-820x1024.jpg',
    bio: 'I love it here at Felix. And I promise that if you come join me in class, you’ll have a ton of fun.'
  },
  {
    name: 'Grant Gonyer',
    title: 'Coach',
    imageUrl: '/images/Grant-819x1024.jpg',
    bio: 'I got into training because I was tired of saying “I can’t”. Spending the first 20 years of my life as “the fat kid”, I said those words a lot.'
  },
  {
    name: 'Jeff Bialos',
    title: 'Coach',
    nickname: 'Old Man Strumph',
    imageUrl: '/images/Coach-Jeff-Bialos---Felix-Athletics.jpg',
    bio: 'I have been a lifelong gym rat and been doing functional fitness for 10 years now.'
  },
  {
    name: 'Phillip Cowin',
    title: 'Coach',
    nickname: 'Chow Mein',
    imageUrl: '/images/Coach-Phillip-Corwin---Felix-Athletics.jpg',
    bio: 'I have been an athlete my whole life. I was a state placer for the Washington State Wrestling tournament, competitive power lifter, and competed in physique bodybuilding.'
  },
    {
    name: 'Carter Alldredge',
    title: 'Coach',
    nickname: 'Cartier',
    imageUrl: '/images/Coach-Carter-Alldredge---Felix-Athletics.jpg',
    bio: 'I started my relationship with CrossFit by making fun of it.'
  },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-zinc-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Meet the team behind Felix Athletics</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.name} title={`${member.name}${member.nickname ? ` (AKA \"${member.nickname}\")` : ''}`}>
              <Image src={member.imageUrl} alt={member.name} width={500} height={500} className="rounded-lg mb-4"/>
              <p className="text-zinc-600 font-bold">{member.title}</p>
              <p className="text-zinc-600">{member.bio}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
