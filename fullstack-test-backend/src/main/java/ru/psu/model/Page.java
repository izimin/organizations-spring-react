package ru.psu.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class Page<T> {

    private List<T> content = new ArrayList<>();
    private int total;
    private int pageSize;
    private int numberOfPages;

    public Page(List<T> content, int total, int pageSize) {
        this.content.addAll(content);
        this.total = total;
        this.pageSize = pageSize;
        this.numberOfPages = new Double(Math.ceil((double) total / pageSize)).intValue();
    }

}