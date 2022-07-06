import './Contact.css'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@mui/material';


const Contact = () => {


  return (
    <div className="Contact" style={{marginTop: '30px'}}> 
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" style={{marginBottom: '30px'}}>
              Dejanos tu mensaje
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Completa tu nombre" label="Nombre" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Completa tu apellido" label="Apellido" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Completa tu email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Completa tu teléfono" label="Teléfono" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Mensaje" multiline rows={4} placeholder="Escribí tu mensaje aquí" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button style={{background:'#14323d'}} type="submit" variant="contained" fullWidth>Enviar</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Contact;