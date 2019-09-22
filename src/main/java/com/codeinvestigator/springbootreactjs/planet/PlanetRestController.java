package com.codeinvestigator.springbootreactjs.planet;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class PlanetRestController {
    private List<Planet> planets = List.of(
            new Planet(0, "Mercury BE", true, false),
            new Planet(1, "Venus BE", true, false),
            new Planet(2, "Earth BE", true, true),
            new Planet(3, "Mars BE", true, true),
            new Planet(4, "Jupiter BE", true, false),
            new Planet(5, "Saturn BE", true, false),
            new Planet(6, "Planet X BE", false, false),
            new Planet(7, "Planet Y BE", false, true),
            new Planet(8, "Planet Z BE", false, true),
            new Planet(9, "Planet faraway BE", false, false)

    );

    @GetMapping("/api/planet")
    public List<Planet> getPlanets(){
        return planets;
    }

    @PostMapping("/api/planet")
    public List<Planet> setPlanets(@RequestBody List<Planet> newplanets){
        planets = newplanets;
        return planets;
    }




}
