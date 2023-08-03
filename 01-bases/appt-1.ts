(() => {

    // Tipos
    const batman: String = 'Bruce';
    const superman: String = 'Clark';
  
    const existe: Boolean = false;
  
    // Tuplas
    const parejaHeroes: [String, String] = [batman,superman];
    const villano: [String, Number, Boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: Array<String> = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum Fuerza {
      aquaman = 0,
      batman = 1,
      flash = 5,
      superman = 100
    }
    const fuerzaFlash: Fuerza = Fuerza.flash;
    const fuerzaSuperman: Fuerza = Fuerza.superman;
    const fuerzaBatman: Fuerza = Fuerza.batman;
    const fuerzaAcuaman: Fuerza = Fuerza.aquaman;
  
    // Retorno de funciones
    function activar_batiseñal():String {
      return 'activada';
    }
  
    function pedir_ayuda(): void {
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as String).length;
    console.log( largoDelPoder );
  
  })()
  
  