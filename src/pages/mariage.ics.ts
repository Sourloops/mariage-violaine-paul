import type { APIRoute } from 'astro';
import config from '../data/config.json';

function formatICSDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

function escapeICS(text: string): string {
  return text.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
}

export const GET: APIRoute = () => {
  const { couple, dateMariage, ceremonie, reception } = config;

  const start = new Date(dateMariage);
  // Durée estimée de la journée (cérémonie + réception) : ~9h.
  const end = new Date(start.getTime() + 9 * 60 * 60 * 1000);

  const lieuCeremonie = ceremonie.adresse === 'À confirmer' ? ceremonie.nom : ceremonie.adresse;

  const summary = `Mariage de ${couple.prenom1} & ${couple.prenom2}`;
  const description = [
    `Cérémonie (${ceremonie.type}) : ${ceremonie.nom}, à ${ceremonie.heure}`,
    `Réception : ${reception.nom}, à ${reception.heure}`,
  ].join('\n');

  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Violaine & Paul//Mariage//FR',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:mariage-violaine-paul-${start.getTime()}@violaine-et-paul`,
    `DTSTAMP:${formatICSDate(new Date())}`,
    `DTSTART:${formatICSDate(start)}`,
    `DTEND:${formatICSDate(end)}`,
    `SUMMARY:${escapeICS(summary)}`,
    `DESCRIPTION:${escapeICS(description)}`,
    `LOCATION:${escapeICS(lieuCeremonie)}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];

  return new Response(lines.join('\r\n') + '\r\n', {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'attachment; filename="mariage-violaine-paul.ics"',
    },
  });
};
