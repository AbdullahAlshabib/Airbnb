$(document).ready(function () {


  $("#img1").mouseover(function(){
    $("#PL").fadeTo("fast",0.2);
    $("#SA").fadeTo("fast",0.2);
    $("#BL1").fadeTo("fast",0.2);
    $("#FL1").fadeTo("fast",0.2);
    $("#PD").fadeTo("fast",0.2);
    });
    
    $( "#img1" ).mouseout(function() {
    $("#PL").fadeTo("fast",1);
    $("#SA").fadeTo("fast",1);
    $("#BL1").fadeTo("fast",1);
    $("#FL1").fadeTo("fast",1);
    $("#PD").fadeTo("fast",1);
    });
    
    
    $("#img2").mouseover(function(){
    $("#CL").fadeTo("fast",0.2);
    $("#SA").fadeTo("fast",0.2);
    $("#BL1").fadeTo("fast",0.2);
    $("#FL1").fadeTo("fast",0.2);
    $("#PD").fadeTo("fast",0.2);
    });
    
    $( "#img2" ).mouseout(function() {
    $("#CL").fadeTo("fast",1);
    $("#SA").fadeTo("fast",1);
    $("#BL1").fadeTo("fast",1);
    $("#FL1").fadeTo("fast",1);
    $("#PD").fadeTo("fast",1);
    });
    
    $("#img3").mouseover(function(){
    $("#CL").fadeTo("fast",0.2);
    $("#PL").fadeTo("fast",0.2);
    $("#SA").fadeTo("fast",0.2);
    $("#BL1").fadeTo("fast",0.2);
    $("#FL1").fadeTo("fast",0.2);
    });

    $("#img3").mouseout(function(){
    $("#CL").fadeTo("fast",1);
    $("#PL").fadeTo("fast",1);
    $("#SA").fadeTo("fast",1);
    $("#BL1").fadeTo("fast",1);
    $("#FL1").fadeTo("fast",1);
    });
    
    $("#img4").mouseover(function(){
    $("#CL").fadeTo("fast",0.2);
    $("#PL").fadeTo("fast",0.2);
    $("#PD").fadeTo("fast",0.2);
    $("#BL1").fadeTo("fast",0.2);
    $("#FL1").fadeTo("fast",0.2);
    });

    $("#img4").mouseout(function(){
    $("#CL").fadeTo("fast",1);
    $("#PL").fadeTo("fast",1);
    $("#PD").fadeTo("fast",1);
    $("#BL1").fadeTo("fast",1);
    $("#FL1").fadeTo("fast",1);
    });
    
    $("#img5").mouseover(function(){
    $("#CL").fadeTo("fast",0.2);
    $("#PL").fadeTo("fast",0.2);
    $("#PD").fadeTo("fast",0.2);
    $("#SA").fadeTo("fast",0.2);
    $("#FL1").fadeTo("fast",0.2);
    });
  
    $("#img5").mouseout(function(){
    $("#CL").fadeTo("fast",1);
    $("#PL").fadeTo("fast",1);
    $("#PD").fadeTo("fast",1);
    $("#SA").fadeTo("fast",1);
    $("#FL1").fadeTo("fast",1);
    });
    
    $("#img6").mouseover(function(){
    $("#CL").fadeTo("fast",0.2);
    $("#PL").fadeTo("fast",0.2);
    $("#PD").fadeTo("fast",0.2);
    $("#SA").fadeTo("fast",0.2);
    $("#BL1").fadeTo("fast",0.2);
    });
    
    $("#img6").mouseout(function(){
    $("#CL").fadeTo("fast",1);
    $("#PL").fadeTo("fast",1);
    $("#PD").fadeTo("fast",1);
    $("#SA").fadeTo("fast",1);
    $("#BL1").fadeTo("fast",1);
    });



    $("li").click(function(){
       $(".team-info").css("margin-top","1300px")
       $(".group-A").css("margin-top","1300px")
       $(".group-B").css("margin-top","1620px")
       $(".group-C").css("margin-top","2050px")
       $(".group-D").css("margin-top","2350px")
       $(".group-E").css("margin-top","2650px")
       $(".group-F").css("margin-top","2950px")
       $(".group-G").css("margin-top","3250px")
       $(".group-H").css("margin-top","3550px")
    })
   
    $('.autoplay').slick({
     slidesToShow: 4,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 1200,
     });           
    
    
     AOS.init({
    easing: 'ease-out-back',
    duration: 1000
    });


    
    
    
    
    $(".img").click(function () {
      var img = $(this).children('img').attr('src');
      var id = $(this).attr('id');
      $(".team-info").children('img').attr('src', img);
      $('.list-group-item').remove("#list");
      $(".container").toggleClass("exit");
      $(".team-info").attr("class", "team-info enter");
      $(".group-A").hide();
      $(".group-B").hide();
      $(".group-C").hide();
      $(".group-D").hide();
      $(".group-E").hide();
      $(".group-F").hide();
      $(".group-G").hide();
      $(".group-H").hide();
      $(".team-info").show();
      $("footer").css('margin-top',"1700px");


      $.ajax({
        headers: { 'X-Auth-Token': '3f5541e60bdb40178d97dbdb730b431f' },
        url: `https://api.football-data.org/v2/competitions/${id}/standings`,
        dataType: 'json',
        type: 'GET',
      }).done(function (response) {
        $stand = $('#standings-list')
  
        var array = response.standings[0].table;
        for (let i = 0; i < array.length; i++) {
          team(array[i]);
        }
        
        function team(pos) {
          var position = pos.position
          var name = pos.team.name
          var played = pos.playedGames
          var won = pos.won
          var draw = pos.draw
          var lost = pos.lost
          var points = pos.points
          $stand.append(`
          <li class="list-group-item" id="list" data-aos="flip-up">
          <p> ${position}. ${name}</p>
          <p>${played}</p> 
          <p>${won}</p>      
          <p>${draw}</p>
          <p>${lost}</p>
          <p>${points}</p>
      </li> `)
        }
  
        
      })
    
    })
    $(".col-sm-12").click(function () {
      var img = $(this).children('img').attr('src');
      var id = $(this).attr('id');
      $(".group-A").children('img').attr('src', img);
      $('.list-group-item').remove("#list");

      $(".container").toggleClass("exit");
      $(".group-A").attr("class", "group-A enter");
      $(".group-B").attr("class", "group-B enter") ; 
      $(".team-info").hide();
      $(".group-A").show();
      $(".group-B").show();
      $(".group-C").show();
      $(".group-D").show();
      $(".group-E").show();
      $(".group-F").show();
      $(".group-G").show();
      $(".group-H").show();
      $("footer").css('margin-top',"2800px");

    
      
      $.ajax({
        headers: { 'X-Auth-Token': '3f5541e60bdb40178d97dbdb730b431f' },
        url: `https://api.football-data.org/v2/competitions/${id}/standings`,
        dataType: 'json',
        type: 'GET',
      }).done(function (response) {
        $stand1 = $('#group-list')
  
        var array = response.standings[0].table;
        for (let i = 0; i < array.length; i++) {
          group1(array[i]);
        }
        
        function group1(pos) {
          var position = pos.position
          var name = pos.team.name
          var played = pos.playedGames
          var won = pos.won
          var draw = pos.draw
          var lost = pos.lost
          var points = pos.points
          $stand1.append(`
          <li class="list-group-item" id="lista" data-aos="fade-right">
          <p> ${position}. ${name}</p>
          <p>${played}</p> 
          <p>${won}</p>      
          <p>${draw}</p>
          <p>${lost}</p>
          <p>${points}</p>
      </li> `)
        }
        
        $stand2 = $('#group-listB')
  
        var array = response.standings[3].table;
        for (let i = 0; i < array.length; i++) {
          group2(array[i]);
        }
        
        function group2(pos) {
          var position = pos.position
          var name = pos.team.name
          var played = pos.playedGames
          var won = pos.won
          var draw = pos.draw
          var lost = pos.lost
          var points = pos.points
          $stand2.append(`
          <li class="list-group-item" id="lista" data-aos="fade-left">
          <p> ${position}. ${name}</p>
          <p>${played}</p> 
          <p>${won}</p>      
          <p>${draw}</p>
          <p>${lost}</p>
          <p>${points}</p>
      </li> `)
        }
        
        $stand3 = $('#group-listC')
  
        var array = response.standings[6].table;
        for (let i = 0; i < array.length; i++) {
          group3(array[i]);
        }
        
        function group3(pos) {
          var position = pos.position
          var name = pos.team.name
          var played = pos.playedGames
          var won = pos.won
          var draw = pos.draw
          var lost = pos.lost
          var points = pos.points
          $stand3.append(`
          <li class="list-group-item" id="lista" data-aos="fade-right">
          <p> ${position}. ${name}</p>
          <p>${played}</p> 
          <p>${won}</p>      
          <p>${draw}</p>
          <p>${lost}</p>
          <p>${points}</p>
      </li> `)
        }
        
        $stand4 = $('#group-listD')
  
        var array = response.standings[9].table;
        for (let i = 0; i < array.length; i++) {
          group4(array[i]);
        }
        
        function group4(pos) {
          var position = pos.position
          var name = pos.team.name
          var played = pos.playedGames
          var won = pos.won
          var draw = pos.draw
          var lost = pos.lost
          var points = pos.points
          $stand4.append(`
          <li class="list-group-item" id="lista" data-aos="fade-left">
          <p> ${position}. ${name}</p>
          <p>${played}</p> 
          <p>${won}</p>      
          <p>${draw}</p>
          <p>${lost}</p>
          <p>${points}</p>
      </li> `)
        }
        
        $stand5 = $('#group-listE')
  
        var array = response.standings[12].table;
        for (let i = 0; i < array.length; i++) {
          group5(array[i]);
        }
        
        function group5(pos) {
          var position = pos.position
          var name = pos.team.name
          var played = pos.playedGames
          var won = pos.won
          var draw = pos.draw
          var lost = pos.lost
          var points = pos.points
          $stand5.append(`
          <li class="list-group-item" id="lista" data-aos="fade-right">
          <p> ${position}. ${name}</p>
          <p>${played}</p> 
          <p>${won}</p>      
          <p>${draw}</p>
          <p>${lost}</p>
          <p>${points}</p>
      </li> `)
        }
        
        $stand6 = $('#group-listF')
  
        var array = response.standings[15].table;
        for (let i = 0; i < array.length; i++) {
          group6(array[i]);
        }
        
        function group6(pos) {
          var position = pos.position
          var name = pos.team.name
          var played = pos.playedGames
          var won = pos.won
          var draw = pos.draw
          var lost = pos.lost
          var points = pos.points
          $stand6.append(`
          <li class="list-group-item" id="lista" data-aos="fade-left">
          <p> ${position}. ${name}</p>
          <p>${played}</p> 
          <p>${won}</p>      
          <p>${draw}</p>
          <p>${lost}</p>
          <p>${points}</p>
      </li> `)
        }
        
        $stand7 = $('#group-listG')
  
        var array = response.standings[18].table;
        for (let i = 0; i < array.length; i++) {
          group7(array[i]);
        }
        
        function group7(pos) {
          var position = pos.position
          var name = pos.team.name
          var played = pos.playedGames
          var won = pos.won
          var draw = pos.draw
          var lost = pos.lost
          var points = pos.points
          $stand7.append(`
          <li class="list-group-item" id="lista" data-aos="fade-right">
          <p> ${position}. ${name}</p>
          <p>${played}</p> 
          <p>${won}</p>      
          <p>${draw}</p>
          <p>${lost}</p>
          <p>${points}</p>
      </li> `)
        }
        
        $stand8 = $('#group-listH')
  
        var array = response.standings[21].table;
        for (let i = 0; i < array.length; i++) {
          group8(array[i]);
        }
        
        function group8(pos) {
          var position = pos.position
          var name = pos.team.name
          var played = pos.playedGames
          var won = pos.won
          var draw = pos.draw
          var lost = pos.lost
          var points = pos.points
          $stand8.append(`
          <li class="list-group-item" id="lista" data-aos="fade-left">
          <p> ${position}. ${name}</p>
          <p>${played}</p> 
          <p>${won}</p>      
          <p>${draw}</p>
          <p>${lost}</p>
          <p>${points}</p>
      </li> `)
        }
        
      })
    
    })

   

    
  });