'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Image } from 'src/components/image';

// ----------------------------------------------------------------------

const HERO_IMAGE = '/assets/akhahas-sri/hero-3.png';
const SCENES_IMAGE = '/assets/akhahas-sri/hero-2.jpg';
const MEMORIAL_IMAGE = '/assets/akhahas-sri/rip-1.jpeg';

const highlights = [
  {
    icon: '29',
    title: 'Wild Routes',
    body: 'The Dawn Trail of Rocky Mountain Park links lake viewpoints with quiet pine forests.',
  },
  {
    icon: '08',
    title: 'Local Guides',
    body: 'Small groups move with expert trip leaders, weather checks, and flexible pacing.',
  },
  {
    icon: '92',
    title: 'Hidden Places',
    body: 'Travel beyond the famous overlooks into coves, ridgelines, and waterfall paths.',
  },
];

const tours = [
  { title: 'Tour 1', subtitle: 'Misty forest walks', position: '0% 0%' },
  { title: 'Tour 2', subtitle: 'Blue mountain lakes', position: '100% 0%' },
  { title: 'Tour 3', subtitle: 'Waterfall valleys', position: '0% 100%' },
  { title: 'Tour 4', subtitle: 'Jungle river routes', position: '100% 100%' },
];

const videos = [
  { position: '100% 0%', sx: { gridColumn: '4 / span 2', gridRow: '1 / span 2' } },
  { position: '0% 100%', sx: { gridColumn: '3 / span 2', gridRow: '3 / span 2' } },
  { position: '100% 100%', sx: { gridColumn: '5 / span 2', gridRow: '3 / span 2' } },
  { position: '0% 0%', sx: { gridColumn: '1 / span 2', gridRow: '5 / span 2' } },
  { position: '100% 0%', sx: { gridColumn: '3 / span 2', gridRow: '5 / span 2' } },
  { position: '0% 100%', sx: { gridColumn: '5 / span 3', gridRow: '5 / span 2' } },
];

function PlayButton({ small = false }: { small?: boolean }) {
  const theme = useTheme();
  return (
    <Box
      component="span"
      sx={{
        width: small ? 34 : 48,
        height: small ? 34 : 48,
        display: 'grid',
        borderRadius: '50%',
        color: theme.palette.secondary.main,
        placeItems: 'center',
        border: '2px solid rgba(234,215,161,0.88)',
        backgroundColor: 'rgba(9, 47, 33, 0.42)',
        boxShadow: '0 18px 40px rgba(0,0,0,0.34), 0 0 20px rgba(217,181,109,0.14)',
        '&::before': {
          content: '""',
          width: 0,
          height: 0,
          ml: '3px',
          borderTop: `${small ? 6 : 8}px solid transparent`,
          borderBottom: `${small ? 6 : 8}px solid transparent`,
          borderLeft: `${small ? 9 : 13}px solid currentColor`,
        },
      }}
    />
  );
}

export function HomeView() {
  const theme = useTheme();
  return (
    <Box
      component="main"
      sx={{
        minHeight: '100vh',
        color: theme.palette.secondary.main,
        overflow: 'hidden',
        bgcolor: theme.palette.secondary.main,
        fontFamily: "'LINE Seed Sans TH', sans-serif",
      }}
    >
      <Box
        sx={{
          minHeight: { xs: 760, md: 1020 },
          position: 'relative',
          px: { xs: 2.5, md: 8, lg: 13 },
          pt: { xs: 14, md: 19 },
          pb: { xs: 7, md: 6 },
          backgroundImage: `
            linear-gradient(180deg, rgba(9,47,33,0.18) 0%, rgba(9,47,33,0.58) 56%, ${theme.palette.secondary.main} 100%),
            linear-gradient(90deg, rgba(5,37,24,0.94) 0%, rgba(18,61,43,0.58) 48%, rgba(5,37,24,0.84) 100%),
            linear-gradient(0deg, rgba(217,181,109,0.08), rgba(217,181,109,0.08)),
            url(${HERO_IMAGE})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <Box sx={{ mx: 'auto', maxWidth: 1280, position: 'relative' }}>
          <Box sx={{ maxWidth: 610 }}>
            <Image
              alt="Single logo"
              sx={{ width: 200 }}
              src={`${CONFIG.assetsDir}/logo/logo-single.svg`}
            />
            <Typography
              sx={{
                mt: 2,
                color: theme.palette.secondary.main,
                fontSize: { xs: 47, sm: 68, md: 82 },
                fontWeight: 800,
                lineHeight: 0.92,
                textTransform: 'uppercase',
              }}
            >
              AKHAHAS SRI
            </Typography>
            <Typography variant="h1">อรรคฮาตสี</Typography>

            <Typography variant="h5">บ้านขามเรียง มหาสารคาม</Typography>
          </Box>

          <Stack
            spacing={1.35}
            sx={{
              top: { xs: 152, md: 170 },
              right: 0,
              width: 120,
              display: { xs: 'none', md: 'flex' },
              position: 'absolute',
              alignItems: 'flex-end',
            }}
          >
            {['01', '02', '03', '04', '05'].map((item, index) => (
              <Stack
                key={item}
                direction="row"
                spacing={1.3}
                alignItems="center"
                sx={{
                  color: index === 2 ? theme.palette.secondary.main : 'rgba(246,237,219,0.48)',
                }}
              >
                <Typography sx={{ fontSize: 12, fontWeight: 800 }}>{item}</Typography>
                <Box
                  sx={{
                    height: 2,
                    width: index === 2 ? 78 : 18,
                    bgcolor: index === 2 ? theme.palette.secondary.main : 'rgba(234,215,161,0.28)',
                  }}
                />
              </Stack>
            ))}
          </Stack>

          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 3, md: 5 }}
            sx={{
              mt: { xs: 19, md: 23 },
              pt: 3,
              borderBottom: '1px solid rgba(234,215,161,0.26)',
              pb: 4,
            }}
          >
            {highlights.map((item) => (
              <Stack key={item.title} direction="row" spacing={2.2} sx={{ flex: 1 }}>
                <Typography
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: 24,
                    fontWeight: 800,
                    opacity: 0.78,
                    minWidth: 34,
                    lineHeight: 1,
                  }}
                >
                  {item.icon}
                </Typography>
                <Box>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body1" sx={{ mt: 0.8, color: 'rgba(246,237,219,0.58)' }}>
                    {item.body}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      mt: 1.5,
                      color: theme.palette.secondary.main,
                      textTransform: 'uppercase',
                    }}
                  >
                    More detailed
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          px: { xs: 2.5, md: 8, lg: 13 },
          py: { xs: 7, md: 11 },
          // color: theme.palette.secondary.main,
          backgroundImage: `
            radial-gradient(circle at 50% 8%,  ${theme.palette.secondary.main} 0,  ${theme.palette.secondary.main} 10%),
            linear-gradient(180deg, ${theme.palette.secondary.main} 0, #034420 92px, #012d1a 100%)
          `,
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Box
            component="img"
            src={MEMORIAL_IMAGE}
            alt="Lotus memorial collage"
            sx={{
              width: '400px',
              height: '100%',
              display: 'block',
              mx: 'auto',
              filter: 'drop-shadow(0 28px 55px rgba(9,47,33,0.12))',
            }}
          />

          <Stack sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 4 }}>
            <Box sx={{ width: '50%' }}>
              <Typography
                variant="h3"
                color="primary"
                sx={{
                  fontStyle: 'italic',
                }}
              >
                ปางเธอท่านผทม เสด็จชมเสวยสวรรค์ อาภาผ่องเพ็ญจันทร์ พระเธอนั้นนิทราลัย
                เสด็จมาเป็นแก้วตา ให้ประชาได้ชื่นใจ เสด็จสู่สุราลัย ดังดวงใจจะรานรอน
              </Typography>

              <Typography
                variant="h4"
                color="primary"
                sx={{
                  fontStyle: 'italic',
                  mt: 3,
                }}
              >
                &quot;รจนาอาลัย : รัฐพล อินโพนทัน&quot;
              </Typography>
            </Box>
          </Stack>

          <Box
            sx={{
              mt: 3,
              mx: 'auto',
              width: 180,
              height: 4,
              bgcolor: theme.palette.secondary.main,
              opacity: 0.72,
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          px: { xs: 2.5, md: 8, lg: 13 },
          py: { xs: 7, md: 10 },
          backgroundImage: `
            linear-gradient(0deg, ${theme.palette.primary.main} 0%, rgba(9,47,33,0.64) 32%, ${theme.palette.secondary.main} 100%),
            linear-gradient(0deg, rgba(217,181,109,0.1), rgba(217,181,109,0.1)),
            url(${SCENES_IMAGE})
          `,
        }}
      >
        <Box sx={{ mx: 'auto', maxWidth: 1000, textAlign: 'center' }}>
          <Typography variant="h3">ผลงาน</Typography>
          <Typography sx={{ mt: 1.4, color: 'rgba(246,237,219,0.62)', fontSize: 12 }}>
            There will be a small title here.
          </Typography>

          <Box
            sx={{
              mt: 7,
              display: 'grid',
              gap: { xs: 2.2, sm: 2.5 },
              gridTemplateColumns: {
                xs: 'repeat(2, minmax(0, 1fr))',
                md: 'repeat(4, minmax(0, 1fr))',
              },
            }}
          >
            {tours.map((tour, index) => (
              <Box
                key={tour.title}
                sx={{
                  height: { xs: 245, md: 305 },
                  overflow: 'hidden',
                  position: 'relative',
                  border:
                    index === 1
                      ? '1px solid rgba(234,215,161,0.9)'
                      : '1px solid rgba(246,237,219,0.08)',
                  boxShadow:
                    index === 1 ? '0 0 32px rgba(217,181,109,0.2)' : '0 22px 55px rgba(0,0,0,0.4)',
                  backgroundImage: `
                    linear-gradient(180deg, rgba(9,47,33,0.04) 0%, rgba(9,47,33,0.26) 42%, rgba(5,37,24,0.9) 100%),
                    linear-gradient(0deg, rgba(217,181,109,0.1), rgba(217,181,109,0.1)),
                    url(${SCENES_IMAGE})
                  `,
                  backgroundSize: '230% 230%',
                  backgroundPosition: tour.position,
                  borderRadius: '4px',
                }}
              >
                <Box sx={{ left: 0, right: 0, bottom: 28, position: 'absolute' }}>
                  <Typography sx={{ fontSize: 17, fontWeight: 800, textTransform: 'uppercase' }}>
                    {tour.title}
                  </Typography>
                  <Typography sx={{ mt: 0.8, color: 'rgba(246,237,219,0.66)', fontSize: 11 }}>
                    {tour.subtitle}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          px: { xs: 2.5, md: 8, lg: 13 },
          py: { xs: 8, md: 12 },
          minHeight: { md: 660 },
          backgroundImage: `
            linear-gradient(180deg, ${theme.palette.primary.main} 0%, rgba(9,47,33,0.64) 32%, ${theme.palette.primary.main} 100%),
            linear-gradient(90deg, rgba(5,37,24,0.94) 0%, rgba(18,61,43,0.48) 52%, rgba(5,37,24,0.9) 100%),
            linear-gradient(0deg, rgba(217,181,109,0.1), rgba(217,181,109,0.1)),
            url(${SCENES_IMAGE})
          `,
          backgroundSize: 'cover',
          backgroundPosition: '100% 100%',
        }}
      >
        <Box
          sx={{
            mx: 'auto',
            gap: { xs: 6, md: 5 },
            maxWidth: 1280,
            display: 'grid',
            alignItems: 'center',
            gridTemplateColumns: { xs: '1fr', md: '0.88fr 1.12fr' },
          }}
        >
          <Box>
            <Typography
              component="h2"
              sx={{
                color: theme.palette.secondary.main,
                maxWidth: 520,
                fontSize: { xs: 42, sm: 58, md: 68 },
                fontWeight: 800,
                lineHeight: 0.96,
                textTransform: 'uppercase',
              }}
            >
              Discover the World in a New Way
            </Typography>

            <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 4.5 }}>
              <PlayButton />
              <Typography sx={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase' }}>
                Watch the video
              </Typography>
            </Stack>

            <Typography
              sx={{
                mt: 4,
                maxWidth: 430,
                color: theme.palette.secondary.main,
                fontSize: 13,
                lineHeight: 1.75,
              }}
            >
              Have you ever heard an avalanche roar in the mountains? Just after the avalanche
              roars, and there is absolute silence. You stop understanding where you are. That
              moment is ours.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              minHeight: { xs: 420, md: 520 },
              gridTemplateRows: 'repeat(6, 1fr)',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: { xs: 1.5, md: 2 },
            }}
          >
            {videos.map((video, index) => (
              <Box
                key={index}
                sx={{
                  ...video.sx,
                  display: 'grid',
                  minHeight: 96,
                  overflow: 'hidden',
                  placeItems: 'center',
                  backgroundImage: `
                    linear-gradient(rgba(9,47,33,0.12), rgba(5,37,24,0.42)),
                    linear-gradient(0deg, rgba(217,181,109,0.1), rgba(217,181,109,0.1)),
                    url(${SCENES_IMAGE})
                  `,
                  backgroundSize: '230% 230%',
                  backgroundPosition: video.position,
                  borderRadius: '3px',
                  boxShadow: '0 24px 60px rgba(0,0,0,0.36)',
                }}
              >
                <PlayButton small />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      <Stack
        component="footer"
        direction="row"
        spacing={4}
        justifyContent="center"
        sx={{ pb: 7, color: theme.palette.secondary.main, bgcolor: theme.palette.primary.main }}
      >
        {['◎', 'f', '✈', 't'].map((item) => (
          <Typography key={item} sx={{ fontSize: 18, fontWeight: 800 }}>
            {item}
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}
