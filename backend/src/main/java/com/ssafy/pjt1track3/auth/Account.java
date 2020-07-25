package com.ssafy.pjt1track3.auth;

import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@EqualsAndHashCode(of="id")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Account{
    @Id @GeneratedValue
    private String id;
    private String pw;

    @Enumerated(EnumType.STRING)
    @ElementCollection(fetch= FetchType.EAGER)
    private Set<AccountRole> roles;
}
